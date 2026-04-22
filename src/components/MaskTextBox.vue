<script setup lang="ts">
import { ref } from 'vue'
const textMasked = ref('')
const textUnmasked = ref('')

const props = withDefaults(defineProps<{ symbol?: string }>(), { symbol: '*' })

const updateMaskedText = (event: KeyboardEvent) => {
  // Block particular keys
  if (event.key.length > 1 || ['ArrowLeft', 'Delete'].includes(event.key)) return

  textUnmasked.value += event.key
  textMasked.value = textUnmasked.value.replace(/./g, props.symbol)
}
</script>
<template>
  <input type="text" @keydown.prevent="updateMaskedText" :value="textMasked" class="ml-1 input" />
</template>

<style scoped>
.button {
  background-color: rgb(236, 236, 236);
  color: black;
}
</style>
