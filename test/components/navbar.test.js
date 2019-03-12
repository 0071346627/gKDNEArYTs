import Navbar from '~/components/navbar'
import { mount } from '@vue/test-utils'
import { LINKS as links, TITLE as title } from '~/content/navbar.json'

describe('Navbar', () => {
  let wrapper
  let html

  beforeAll(() => {
    wrapper = mount(Navbar, {
      propsData: { links, title },
      stubs: ['nuxt-link']
    })
    html = wrapper.html()
  })

  test('html snapshot', () => {
    expect(html).toMatchSnapshot()
  })

  test('navbar contains link tag for each provided link', () => {
    const tag = 'nuxt-link-stub'
    links.forEach(link => {
      expect(html).toContain(
        `<${tag} to="${link.path}" class="navbar-item">${link.name}</${tag}>`
      )
    })
  })

  test('clicking hamburger toggles isActive property', () => {
    wrapper.setData({ isActive: false })
    const hamburger = wrapper.find('.navbar-burger')
    expect(wrapper.vm.isActive).toBeFalsy()
    hamburger.trigger('click')
    expect(wrapper.vm.isActive).toBeTruthy()
    hamburger.trigger('click')
    expect(wrapper.vm.isActive).toBeFalsy()
  })

  test('toggling isActive property toggles the is-active class', () => {
    wrapper.setData({ isActive: false })
    const menu = wrapper.find('#navbar-menu')
    expect(menu.classes()).not.toContain('is-active')
    wrapper.setData({ isActive: true })
    expect(menu.classes()).toContain('is-active')
  })
})
