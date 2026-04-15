<script setup lang="ts">
import { ref, reactive } from 'vue'
import { users } from '@/assets/users'

//#region  USER
const user = ref({ LastName: 'Jednorowicz' })
setTimeout(() => {
  user.value = { LastName: '<h1>Jednorowicz</h1>' }
}, 4000)
//#endregion USER

//#region  MOD
const whySad = ref('Szaroburo')

//#endregion  MOD
const second = ref('12px')
setInterval(() => {
  second.value = new Date().getSeconds() + 'px'
}, 4000)
</script>

<template>
  <input v-model.lazy.trim="whySad" />
  <input v-model="whySad" />
  <div class="last-name-style">{{ user.LastName }}</div>
  <div v-html="user.LastName"></div>
  <pre>{{ users }}</pre>
</template>

<style scoped>
.last-name-style {
  font-size: v-bind('second');
}
</style>
