<script setup lang="ts">
import { ref, watch } from 'vue'
const _props = defineProps<{ start: number }>()
const _currentNumber = ref()

watch(
  () => _props.start,
  () => {
    _currentNumber.value = _props.start
    setInterval(() => {
      if (_currentNumber.value > 0) _currentNumber.value--
    }, 1000)
  },
  { immediate: true },
)
</script>

<template>
  <button class="btn" :disabled="_currentNumber < 1">
    <span v-if="_currentNumber > 0">{{ _currentNumber }}</span>
    <slot v-if="_currentNumber < 1">Minął czas</slot>
  </button>
</template>

<style scoped></style>
