<script setup>
defineProps({
  breadcrumbList: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="breadcrumb-list small-text">
    <template v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" >
      <span>
        {{ breadcrumb.label }}
      </span>
      <img v-if="idx < breadcrumbList.length - 1" src="/icons/arrow.svg" alt="arrow"/>
    </template>
  </div>
</template>

<style lang="scss">
.breadcrumb-list {
  display: flex;
  gap: 12px;
}
</style>
