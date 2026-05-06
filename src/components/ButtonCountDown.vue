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
    <p class="c-warning">Nie zapomnij kliknąć</p>
    <slot name="counter" v-if="_currentNumber > 0" :current="_currentNumber">{{ _currentNumber }}</slot>

    <div v-if="$slots.counter">
      <slot name="expired" v-if="_currentNumber < 1">Minął czas</slot>
    </div>
    <div v-else>
      <span v-if="_currentNumber < 1" class="text-red-900">game over</span>
    </div>
  </button>
</template>

<style scoped>
button {
  background-color: red !important;
}
.c-warning {
  color: rgb(223, 219, 213);
}
</style>
