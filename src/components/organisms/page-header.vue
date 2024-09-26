<script setup>

import breadcrumbList from '@/components/molecules/breadcrumb-list.vue';
import {useStore} from 'vuex';
import {computed} from 'vue';
import {formPlural} from '@/utils/formPlural.js';

const breadcrumbs = [
  {
    label: 'Главная',
  },
  {
    label: 'Подраздел',
  },
]
const store = useStore()

const suppliersAmount = computed(() => {
  const amount = store.state.suppliers.companies.length
  const word = formPlural(amount, ['поставщик', 'поставщика', 'поставщиков'])
  return `${amount} ${word}`
})

const goodsAmount = computed(() => {
  const amount = 213
  const word = formPlural(amount, ['товар', 'товара', 'товаров'])
  return `${amount} ${word}`
})
</script>

<template>
  <header class="page-header">
    <breadcrumb-list :breadcrumb-list="breadcrumbs"/>
    <div class="page-header__info">
      <h1 class="page-header__heading">
        Заголовок страницы
      </h1>
      <div class="small-text">
        {{ suppliersAmount }} &bull; {{ goodsAmount }}
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.page-header {
  margin-top: 73px;

  &__info {
    margin-top: 12px;
    display: flex;
    align-items: baseline;
    gap: 26px;
  }

  &__heading {
    font-size: 36px;
    color: var(--main-black);


    @media (max-width:1200px) {
      font-size: 24px;
    }
  }
}
</style>