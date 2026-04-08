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
</script>

<template>
  <input v-model.lazy.trim="whySad" />
  <input v-model="whySad" />
  <div>{{ user.LastName }}</div>
  <div v-html="user.LastName"></div>
  <pre>{{ users }}</pre>
</template>
