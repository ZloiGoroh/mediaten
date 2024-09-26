import StarScore from '@/components/atoms/star-score.vue';
import {describe, expect, it} from 'vitest';
import {mount} from '@vue/test-utils';

describe('star-score', () => {
  it('should render', () => {
    const wrapper = mount(StarScore, {props: {score: '4.5'}})
    expect(wrapper.find('img').exists()).toBeTruthy()
    expect(wrapper.text()).toContain('4.5')
  })
})