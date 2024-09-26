<script setup>
import {useStore} from 'vuex';
import {computed} from 'vue';
import StarScore from '@/components/atoms/star-score.vue';
import SectionContainer from '@/components/molecules/section-container.vue';

const store = useStore()

const suppliers = computed(() => store.state.suppliers.companies)
</script>

<template>
  <section-container section-title="Поставщики">
    <div class="suppliers-list__grid four-column-grid">
      <div v-for="company in suppliers" :key="company.name" class="suppliers-list__item">
        <div>
          <img class="suppliers-list__picture" :src="`/suppliers/${company.avatar}.svg`" :alt="company.name" />
        </div>
        <div class="suppliers-list__info">
          <div>{{company.name}}</div>
          <star-score>{{company.score}}</star-score>
        </div>
      </div>
    </div>
  </section-container>
</template>

<style lang="scss">
.suppliers-list {

  &__grid {
    column-gap: 40px;
    row-gap: 48px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: var(--main-black);
    font-weight: bold;
  }

  &__picture {
    filter: grayscale(100%);
    mix-blend-mode: luminosity;
  }
}
</style>