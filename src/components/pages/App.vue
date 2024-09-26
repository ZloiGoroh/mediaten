<script setup>
import {useStore} from 'vuex';
import PageHeader from '@/components/organisms/page-header.vue';
import SuppliersList from '@/components/organisms/suppliers-list.vue';
import ProductSlider from '@/components/organisms/product-slider.vue';
import PageFooter from '@/components/organisms/page-footer.vue';

const store = useStore()

store.dispatch('suppliers/fetchData')
</script>

<template>
  <div class="page-wrapper">
    <page-header />
    <main>
      <suppliers-list class="main-page__supplier-list"/>
      <product-slider class="main-page__popular-products" list-title="Популярные предложения" :product-list="store.state.suppliers.popularGoods"/>
      <product-slider class="main-page__bargain-products" list-title="Выгодные акции" :product-list="store.state.suppliers.bargainGoods"/>
    </main>

    <page-footer />
  </div>
</template>

<style lang="scss">
.main-page {

  &__supplier-list, &__popular-products, &__bargain-products {
    margin-top: 56px;
  }
}
</style>
