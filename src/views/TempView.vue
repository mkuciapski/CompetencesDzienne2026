<script setup lang="ts">
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import { users } from '@/assets/users'

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

const _product = ref({ Name: '', Quantity: 0 })
const _message = ref('')
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
watchEffect(() => {
  if (_product.value.Quantity < 1) _message.value = 'Nie można zamówić mniej niż 1 produktu'
  else if (!_product.value.Name) _message.value = 'Podaj nazwę produktu'
  else _message.value = ''
})
const _showProduct = ref(false)

watch(
  () => _showProduct.value,
  (newVisibility, oldVisibility) => {
    if (newVisibility && !oldVisibility) _product.value = { Name: '', Quantity: 0 }
  },
)
//setTimeout(() => {
// _product.value = { Name: '', Quantity: -1 }
//}, 8000)
</script>

<template>
  <input type="checkbox" v-model="_showProduct" />
  <div v-show="_showProduct">
    <div>
      <input v-model="_product.Name" class="ml-1 input" />
      <input type="number" v-model="_product.Quantity" class="ml-1 input" min="0" max="100" step="1" />
    </div>
    <p class="text-red-700 font-bold">{{ _message }}</p>
  </div>
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
