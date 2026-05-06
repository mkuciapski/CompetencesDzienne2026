<script setup lang="ts">
import { ref } from 'vue'
import OrderItem from '@/components/OrderItem.vue'
import MaskTextBox from '@/components/MaskTextBox.vue'
import PasswordField from '@/components/PasswordField.vue'
import ButtonCountDown from '@/components/ButtonCountDown.vue'
import { Icon } from '@iconify/vue'
// #region OLD
// //#region  USER
// const user = ref({ LastName: 'Jednorowicz' })
// setTimeout(() => {
//   user.value = { LastName: '<h1>Jednorowicz</h1>' }
// }, 4000)
// //#endregion USER

// //#region  MOD
// const whySad = ref('Szaroburo')

// //#endregion  MOD
// const second = ref('12px')
// setInterval(() => {
//   second.value = new Date().getSeconds() + 'px'
// }, 4000)

// const _users = ref(users)
// const _bestUsers = computed((previous) => {
//   console.log('previous users', previous)
//   return _users.value.filter((user) => user.Score > 55)
// })

// setTimeout(() => {
//   _users.value[2]!.Score = 60
// }, 14000)
// #endregion OLD

const _showProduct = ref(false)

const _products = ref([
  { Id: 1, Name: '', Quantity: -1 },
  { Id: 2, Name: 'Kebab', Quantity: 5 },
  { Id: 3, Name: '', Quantity: -1 },
  { Id: 4, Name: '', Quantity: -1 },
])

//setTimeout(() => {
// _product.value = { Name: '', Quantity: -1 }
//}, 8000)

function updateProduct(updatedProduct: { Id: number; Name: string; Quantity: number }) {
  const productToUpdate = _products.value.find((product) => product.Id === updatedProduct.Id)
  if (productToUpdate) {
    productToUpdate.Name = updatedProduct.Name
    productToUpdate.Quantity = updatedProduct.Quantity
  }
}

function numberToText(number: string): string {
  switch (Number(number)) {
    case 9:
      return 'nine'
    case 8:
      return 'eight'
    case 7:
      return 'seven'
    case 6:
      return 'six'
    case 5:
      return 'five'
    case 4:
      return 'four'
    case 3:
      return 'three'
    case 2:
      return 'two'
    case 1:
      return 'one'
    case 0:
      return 'zero'
    default:
      return ''
  }
}
</script>

<template>
  <ButtonCountDown :start="10" />
  <ButtonCountDown :start="999">
    <template #counter="{ current }">
      <Icon v-for="(number, index) in current.toString().split('')" :icon="`mdi:numeric-${numberToText(number)}-box-outline`" width="24" height="24" :key="index" />
    </template>
    <template #expired>
      <Icon icon="mdi:location-warning" width="24" height="24" />
    </template>
  </ButtonCountDown>
  <input type="checkbox" v-model="_showProduct" />
  <OrderItem v-for="product in _products" :key="product.Name" :visible="_showProduct" :product="product" @update="updateProduct" />
  <pre>{{ _products }}</pre>
  <br />
  <MaskTextBox symbol="?" />
  <PasswordField />

  <!-- #region OLD -->
  <!-- <pre>{{ _bestUsers }}</pre> -->
  <!-- <input v-model.lazy.trim="whySad" />
  <input v-model="whySad" />
  <div class="last-name-style">{{ user.LastName }}</div>
  <div v-html="user.LastName"></div>
  <pre>{{ users }}</pre> -->
  <!-- #endregion OLD -->
</template>

<style scoped>
.last-name-style {
  font-size: v-bind('second');
}
</style>
