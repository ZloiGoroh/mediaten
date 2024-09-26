<script setup>
defineProps({
  sectionTitle: {
    type: String,
  },
})
</script>

<template>
  <div class="section-container">
    <div class="section-container__heading">
      <h3 class="section-container__head" v-if="sectionTitle">{{ sectionTitle }}</h3>
      <div>
        Все <img src="/icons/dark-arrow.svg" alt="dark-arrow" />
      </div>
    </div>
    <div class="section-container__slot">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.section-container {
  &__heading {
    display: flex;
    justify-content: space-between;
  }

  &__head {
    color: var(--main-black);
    font-size: 24px;
  }

  &__slot {
    margin-top: 56px;
  }
}
</style>