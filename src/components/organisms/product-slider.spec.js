import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ProductSlider from '@/components/organisms/product-slider.vue'
import ProductCard from '@/components/molecules/product-card.vue'
import SectionContainer from '@/components/molecules/section-container.vue'

describe('ProductSlider', () => {
  const productList = [
    { article: 'A1', title: 'Product 1', price: '1000' },
    { article: 'A2', title: 'Product 2', price: '2000' },
    { article: 'A3', title: 'Product 3', price: '3000' },
  ]

  it('renders list title and product cards correctly', () => {
    const wrapper = mount(ProductSlider, {
      props: {
        listTitle: 'Product List',
        productList,
      },
      global: {
        components: {
          ProductCard,
          SectionContainer,
        },
      },
    })

    expect(wrapper.findComponent(SectionContainer).props('sectionTitle')).toBe('Product List')

    const productCards = wrapper.findAllComponents(ProductCard)
    expect(productCards).toHaveLength(6)
    expect(productCards[0].props('title')).toBe('Product 1')
    expect(productCards[1].props('title')).toBe('Product 2')
  })

  it('renders left and right arrows', () => {
    const wrapper = mount(ProductSlider, {
      props: {
        productList,
      },
    })

    const leftArrow = wrapper.find('.product-slider__arrow-left')
    const rightArrow = wrapper.find('.product-slider__arrow-right')

    expect(leftArrow.exists()).toBe(true)
    expect(rightArrow.exists()).toBe(true)
  })

  it('updates scroll position when arrows are clicked', async () => {
    const wrapper = mount(ProductSlider, {
      props: {
        productList,
      },
    })

    const scrollList = wrapper.find('.product-slider')

    const scrollByMock = vi.fn()
    scrollList.element.scrollBy = scrollByMock

    const rightArrow = wrapper.find('.product-slider__arrow-right')
    await rightArrow.trigger('click')

    expect(scrollByMock).toHaveBeenCalledWith(100, 0)

    const leftArrow = wrapper.find('.product-slider__arrow-left')
    await leftArrow.trigger('click')

    expect(scrollByMock).toHaveBeenCalledWith(-100, 0)
  })

  it('updates arrow visibility based on scroll position', async () => {
    const wrapper = mount(ProductSlider, {
      props: {
        productList,
      },
    })

    const scrollList = wrapper.find('.product-slider')

    const scrollLeftMock = vi.spyOn(scrollList.element, 'scrollLeft', 'get').mockReturnValue(0)
    vi.spyOn(scrollList.element, 'offsetWidth', 'get').mockReturnValue(200)
    vi.spyOn(scrollList.element, 'scrollWidth', 'get').mockReturnValue(500)

    await wrapper.vm.scrollWatcher()

    expect(wrapper.vm.canScrollLeft).toBe(false)
    expect(wrapper.vm.canScrollRight).toBe(true)

    scrollLeftMock.mockReturnValue(300)
    await wrapper.vm.scrollWatcher()

    expect(wrapper.vm.canScrollLeft).toBe(true)
    expect(wrapper.vm.canScrollRight).toBe(false)
  })
})
