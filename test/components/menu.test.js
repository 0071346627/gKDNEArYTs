import Menu from '~/components/menu'
import { mount } from '@vue/test-utils'
import { LOCATIONS } from '~/content/locations.json'

const ACTIVE_PATH = '/weather/paris'
const propsData = { links: LOCATIONS, title: 'My title' }

describe('Menu', () => {
  let wrapper
  let html

  beforeAll(() => {
    wrapper = mount(Menu, {
      propsData,
      mocks: {
        $route: {
          path: ACTIVE_PATH
        }
      },
      stubs: ['nuxt-link']
    })
    html = wrapper.html()
  })

  test('html snapshot', () => {
    expect(html).toMatchSnapshot()
  })

  test('menu contains link tag for each provided link', () => {
    const tag = 'nuxt-link-stub'
    LOCATIONS.forEach(({ name, path }) => {
      expect(html).toContain(`<${tag} to="${path}">${name}</${tag}>`)
    })
  })

  test('menu label shows correct title', () => {
    expect(wrapper.find('.menu-label').text()).toMatch(propsData.title)
  })
})
