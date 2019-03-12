import puppeteer from 'puppeteer'
import { LOCATIONS } from '~/content/locations.json'

jest.setTimeout(60000)

const innerHTML = el => el.innerHTML

describe('Weather', () => {
  let browser
  let page
  beforeEach(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    await page.goto('http://localhost:3000/')
  })

  afterEach(async () => {
    await browser.close()
  })

  test('user can see list of all locations', async () => {
    /* As a user
    ** When I visit the page
    ** I want to see a list of locations
    ** So that I know which locations are available
    */
    /* First, let's scrape all the links from the aside */
    const linkElements = await page.$$('aside a')
    const linkNames = []
    for (const linkElement of linkElements) {
      const name = await page.evaluate(innerHTML, linkElement)
      linkNames.push(name)
    }
    /* Lastly, let's prove that each location is listed as a link */
    LOCATIONS.forEach(({ name }) => {
      expect(linkNames).toContain(name)
    })
  })

  test('user can click location to reveal current weather', async () => {
    /* As a user
    ** When I select a location
    ** I want to see the current weather
    ** So that I know what the weather is for the location I selected
    */
    /* First, let's choose a random location from the list */
    const locationElements = await page.$$('aside a')
    const randomIndex = Math.floor(Math.random() * locationElements.length)
    const randomLocation = locationElements[randomIndex]
    /* Then, let's find the expected content for this location */
    const locationName = await page.evaluate(innerHTML, randomLocation)
    const expectedCopy = LOCATIONS.find(({ name }) => name === locationName)
    /* Then, let's click the location and observe the loaded values */
    await randomLocation.click()
    await page.waitFor(3000)
    const title = await page.evaluate(innerHTML, await page.$('.box h1'))
    const subtitle = await page.evaluate(innerHTML, await page.$('.box h6'))
    const [summary, temperature] = await page.evaluate(
      innerHTML,
      await page.$('.box p')
    )
    const svg = await page.evaluate(innerHTML, await page.$('.box svg'))
    /* Lastly, let's prove that the observed values match the expected values */
    expect(title).toMatch(expectedCopy.name)
    expect(subtitle).toMatch(expectedCopy.country)
    /* The following values are dynamic, let's just check that they're present */
    expect(summary).toBeDefined()
    expect(temperature).toBeDefined()
    expect(svg).toBeDefined()
  })
})
