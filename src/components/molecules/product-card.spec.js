import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProductCard from '@/components/molecules/product-card.vue'
import StarScore from '@/components/atoms/star-score.vue'

describe('ProductCard', () => {
  it('renders product image correctly', () => {
    const wrapper = mount(ProductCard, {
      props: {
        image: 'product-123',
        title: 'Test Product',
      },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/goods/product-123.png')
    expect(img.attributes('alt')).toBe('Test Product')
  })

  it('renders price and old price correctly', () => {
    const wrapper = mount(ProductCard, {
      props: {
        price: 1000,
        oldPrice: '1500',
      },
    })

    const mainPrice = wrapper.find('.product-card__main-price')
    expect(mainPrice.text()).toBe('от 1000 ₽')

    const oldPrice = wrapper.find('.product-card__price div:nth-child(2)')
    expect(oldPrice.text()).toBe('1500 ₽')
  })

  it('renders discount if present', () => {
    const wrapper = mount(ProductCard, {
      props: {
        discount: 20,
      },
    })

    const discountLabel = wrapper.find('.product-card__discount')
    expect(discountLabel.exists()).toBe(true)
    expect(discountLabel.text()).toBe('-20 %')
  })

  it('does not render discount if not provided', () => {
    const wrapper = mount(ProductCard, {
      props: {
        discount: null,
      },
    })

    const discountLabel = wrapper.find('.product-card__discount')
    expect(discountLabel.exists()).toBe(false)
  })

  it('renders article, title, and supplier correctly', () => {
    const wrapper = mount(ProductCard, {
      props: {
        article: 'A123',
        title: 'Test Product',
        supplier: 'Test Supplier',
      },
    })

    const article = wrapper.find('.product-card__article .small-text')
    expect(article.text()).toBe('A123')

    const title = wrapper.find('.product-card__title')
    expect(title.text()).toBe('Test Product')

    const supplier = wrapper.find('.product-card__supplier')
    expect(supplier.text()).toBe('Test Supplier')
  })

  it('renders the score correctly inside star-score component', () => {
    const wrapper = mount(ProductCard, {
      props: {
        score: '4.5',
      },
      global: {
        components: {
          StarScore,
        },
      },
    })

    const score = wrapper.findComponent(StarScore)
    expect(score.exists()).toBe(true)
    expect(score.text()).toBe('4.5')
  })
})
