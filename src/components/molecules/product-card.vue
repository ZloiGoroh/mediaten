<script setup>
import StarScore from '@/components/atoms/star-score.vue';

defineProps({
  price: {
    type: [String, Number],
  },
  article: {
    type: String,
  },
  image: {
    type: String,
  },
  score: {
    type: String,
  },
  title: {
    type: String,
  },
  supplier: {
    type: String,
  },
  discount: {
    type: [String, Number],
  },
  oldPrice: {
    type: String,
  },
})
</script>

<template>
  <div class="product-card">
    <div class="product-card__image">
      <img :src="`/goods/${image}.png`" :alt="title"/>
      <div v-if="discount" class="product-card__discount">
        -{{discount}} %
      </div>
    </div>
    <div class="product-card__price">
      <div class="product-card__main-price">
        от {{price}} ₽
      </div>
      <div v-if="oldPrice">
        {{oldPrice}} ₽
      </div>
    </div>
    <div class="product-card__article">
      <div class="small-text">{{article}}</div>
      <star-score>{{score}}</star-score>
    </div>
    <div class="product-card__title">{{title}}</div>
    <div class="product-card__supplier small-text">{{supplier}}</div>
  </div>
</template>

<style lang="scss">
.product-card {
  width: 260px;
  position: relative;

  &__price {
    margin-top: 28px;
  }

  &__main-price {
    color: var(--main-black);
    font-size: 17px;
    font-weight: bold;
  }

  &__article {
    margin-top: 20px;
    display: flex;
    gap: 12px;
  }

  &__title {
    margin-top: 8px;
    font-size: 15px;
    color: var(--main-black);
  }

  &__supplier {
    margin-top: 8px;
  }

  &__discount {
    background: var(--main-pink);
    border-radius: 3px;
    padding: 3px 6px;
    font-size: 13px;
    color: white;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>