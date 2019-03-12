import pa11y from 'pa11y'

describe('Pa11y', () => {
  let results

  beforeAll(async () => {
    results = await pa11y('http://localhost:3000')
  })

  test('no accessibility issues detected by pa11y', () => {
    expect(results.issues.length).toEqual(0)
    expect(results).toMatchSnapshot()
  })
})
