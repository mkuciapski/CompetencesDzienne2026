<script setup lang="ts">
import { ref, watchEffect, watch } from 'vue'

const _props = withDefaults(defineProps<{ visible?: boolean }>(), { visible: true })

const _product = ref({ Name: '', Quantity: 0 })
const _message = ref('')

watchEffect(() => {
  if (_product.value.Quantity < 1) _message.value = 'Nie można zamówić mniej niż 1 produktu'
  else if (!_product.value.Name) _message.value = 'Podaj nazwę produktu'
  else _message.value = ''
})

watch(
  () => _props.visible,
  (newVisibility, oldVisibility) => {
    if (newVisibility && !oldVisibility) _product.value = { Name: '', Quantity: 0 }
  },
)

/*watch(
  () => _product.value,
  (newProduct, oldProduct) => {
    if (newProduct.Quantity < 1) _message.value = 'Nie można zamówić mniej niż 1 produktu'
    else if (!newProduct.Name) _message.value = 'Podaj nazwę produktu'
    else _message.value = ''
  },
  { deep: true, immediate: true },
)
*/
</script>

<template>
  <div v-if="visible">
    <div>
      <input v-model="_product.Name" class="ml-1 input" />
      <input type="number" v-model="_product.Quantity" class="ml-1 input" min="0" max="100" step="1" />
    </div>
    <p class="text-red-700 font-bold">{{ _message }}</p>
  </div>
</template>

<style scoped></style>
