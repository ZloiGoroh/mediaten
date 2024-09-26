<script setup>
defineProps({
  score: {
    type: [Number, String],
  },
});
</script>

<template>
  <div class="star-score">
    <img src="/icons/star.svg" alt="star"/>
    <div>
      <slot>
        {{ score }}
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.star-score {
  display: flex;
  gap: 6px;
}
</style>