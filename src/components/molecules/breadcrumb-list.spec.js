import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BreadcrumbList from '@/components/molecules/breadcrumb-list.vue'

describe('breadcrumb-list', () => {
  it('renders breadcrumb list correctly', () => {
    const wrapper = mount(BreadcrumbList, {
      props: {
        breadcrumbList: [
          { label: 'Home' },
          { label: 'About' },
          { label: 'Contact' },
        ],
      },
    })
    const breadcrumbs = wrapper.findAll('.breadcrumb-list > *')
    expect(breadcrumbs).toHaveLength(5)
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('About')
    expect(wrapper.text()).toContain('Contact')
  })

  it('renders arrows between breadcrumbs', () => {
    const wrapper = mount(BreadcrumbList, {
      props: {
        breadcrumbList: [
          { label: 'Home' },
          { label: 'Products' },
          { label: 'Electronics' },
        ],
      },
    })

    const arrowIcons = wrapper.findAll('img[alt="arrow"]')
    expect(arrowIcons).toHaveLength(2)
  })

  it('does not render arrow after the last breadcrumb', () => {
    const wrapper = mount(BreadcrumbList, {
      props: {
        breadcrumbList: [
          { label: 'Home' },
          { label: 'Products' },
        ],
      },
    })

    const arrowIcons = wrapper.findAll('img[alt="arrow"]')
    expect(arrowIcons).toHaveLength(1)
  })

  it('renders correctly with an empty breadcrumb list', () => {
    const wrapper = mount(BreadcrumbList, {
      props: {
        breadcrumbList: [],
      },
    })

    expect(wrapper.text()).toBe('')
  })
})