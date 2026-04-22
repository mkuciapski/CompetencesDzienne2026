<script setup lang="ts">
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import { users } from '@/assets/users'
import OrderItem from '@/components/OrderItem.vue'
import MaskTextBox from '@/components/MaskTextBox.vue'

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

//setTimeout(() => {
// _product.value = { Name: '', Quantity: -1 }
//}, 8000)
</script>

<template>
  <input type="checkbox" v-model="_showProduct" />
  <OrderItem v-for="n in 3" :key="n" :visible="_showProduct" />
  <br />
  <MaskTextBox symbol="?" />
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
