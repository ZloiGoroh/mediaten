<script setup>
import ProductCard from '@/components/molecules/product-card.vue';
import SectionContainer from '@/components/molecules/section-container.vue';
import {ref} from 'vue';

defineProps({
  listTitle: {
    type: String,
  },
  productList: {
    type: Array,
    required: true,
  },
})

const scrollList = ref()

const canScrollLeft = ref(false)

const canScrollRight = ref(true)

const scrollWatcher = () => {
  canScrollLeft.value = scrollList.value.scrollLeft > 0
  canScrollRight.value = scrollList.value.scrollLeft + scrollList.value.offsetWidth < scrollList.value.scrollWidth
}

const scrollInDirection = (direction = 1) => {
  scrollList.value.scrollBy(100 * direction, 0)
}
</script>

<template>
  <section-container :section-title="listTitle">
    <div class="product-slider__wrapper">
      <div class="product-slider" ref="scrollList" @scroll="scrollWatcher">
        <button class="product-slider__arrow-left" @click="scrollInDirection(-1)">
          <img :src="`/icons/${canScrollLeft ? 'dark-' : ''}arrow.svg`" alt="arrow"/>
        </button>
        <button class="product-slider__arrow-right" @click="scrollInDirection()">
          <img :src="`/icons/${canScrollRight ? 'dark-' : ''}arrow.svg`" alt="arrow"/>
        </button>
        <product-card class="product-slider__slider-item" v-for="product in [...productList, ...productList]" :key="product.article" v-bind="product"/>
      </div>
    </div>
  </section-container>
</template>

<style lang="scss">
.product-slider {
  display: flex;
  gap: 40px;
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &__wrapper {
    position: relative;
  }


  &__slider-item {
    scroll-snap-align: start;
  }

  &__arrow-left,
  &__arrow-right {
    border-radius: 50%;
    background: white;
    display: flex;
    width: 32px;
    height: 32px;
    position: absolute;
    top: 124px;
    cursor: pointer;
    box-shadow: 0 3px 9px 0 #3D3D3D17;
    z-index: 10;

    img {
      margin: auto
    }
  }
  &__arrow-left {
    left: 0;

    img {
      transform: rotate(180deg);
    }
  }
  &__arrow-right {
    right: 0;
  }
}
</style>