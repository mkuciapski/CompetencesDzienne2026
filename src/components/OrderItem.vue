<script setup lang="ts">
import { ref, watchEffect, watch } from 'vue'

const _props = withDefaults(
  defineProps<{
    visible?: boolean
    product: { Id: number; Name: string; Quantity: number }
  }>(),
  { visible: true },
)

const _product = ref({ ..._props.product }) //JSON.parse(JSON.stringify(_props.product))
const _message = ref('')

const _emits = defineEmits<{
  update: [product: { Id: number; Name: string; Quantity: number }]
}>()

function update() {
  _emits('update', _product.value)
}

watch(
  () => _props.product,
  () => {
    _product.value = { ..._props.product }
  },
  { deep: true },
)

watchEffect(() => {
  if (_product.value.Quantity < 1) _message.value = 'Nie można zamówić mniej niż 1 produktu'
  else if (!_product.value.Name) _message.value = 'Podaj nazwę produktu'
  else _message.value = ''
})

// watch(
//   () => _props.visible,
//   (newVisibility, oldVisibility) => {
//     if (newVisibility && !oldVisibility) _product.value = { Name: '', Quantity: 0 }
//   },
// )

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
      <button class="btn" v-if="!_message" @click="update">+</button>
    </div>
    <p class="text-red-700 font-bold">{{ _message }}</p>
  </div>
</template>

<style scoped></style>
