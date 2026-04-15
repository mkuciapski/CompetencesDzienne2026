<script setup lang="ts">
import { competences } from '@/assets/competences'
import { ref } from 'vue'

const _competences = ref(competences)
const _searchText = ref('')
const _padding = ref('5px')

setTimeout(() => {
  _competences.value[0]!.Description = 'Wolę Tailwinda'
  _competences.value.push({ Id: 11, Name: 'C++', Level: 4, Picture: 'bootstrap.svg', Description: 'Wersja 3' })
}, 4000)
</script>

<template>
  <div class="join">
    <button class="btn join-item text-white bg-green-800">Podaj nazwę kompetencji</button>
    <input type="text" v-model="_searchText" />
  </div>
  <div class="flex flex-wrap justify-center">
    <template v-for="competence in _competences" :key="competence.Id">
      <div v-if="competence.Level" class="card bg-base-100 w-48 shadow-sm card-spacing">
        <h2 class="text-center text-xl uppercase">{{ competence.Name }}</h2>
        <img :src="`assets/${competence.Picture}`" />
        <div class="card-body">
          <p :class="[competence.Level < 3 ? 'text-red-500' : competence.Level > 3 ? 'text-green-500' : '']">Poziom: {{ competence.Level }}</p>
          <p v-if="competence.Description">Opis: {{ competence.Description }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.card-spacing {
  margin: v-bind('_padding');
}
</style>
