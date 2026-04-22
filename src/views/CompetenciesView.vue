<script setup lang="ts">
import { competences } from '@/assets/competences'
import { computed, ref, watch } from 'vue'
import CompetenceCard from '@/components/CompetenceCard.vue'

// #region LIST
const _searchText = ref('')

const _competences = ref(competences)
const _filteredCompetences = computed(() => {
  const searchText = _searchText.value.trim()
  return _competences.value.filter((competence) => competence.Name.toLowerCase().includes(searchText))
})

setTimeout(() => {
  _competences.value[0]!.Description = 'Wolę Tailwinda'
  _competences.value.push({ Id: 11, Name: 'C++', Level: 4, Picture: 'bootstrap.svg', Description: 'Wersja 3' })
}, 4000)
//#endregion LIST

//#region  DISPLAY
const _padding = ref('5px')
//#endregion  DISPLAY

const _toastMessage = ref('')
watch(
  () => _competences.value,
  () => {
    _toastMessage.value = 'Dane kompetencji zmieniły się'
  },
  { deep: true },
)
</script>

<template>
  <div class="join">
    <button class="btn join-item text-white bg-green-800">Podaj nazwę kompetencji</button>
    <input type="text" v-model="_searchText" />
  </div>
  <div class="flex flex-wrap justify-center">
    <template v-for="competence in _filteredCompetences" :key="competence.Id">
      <CompetenceCard v-if="competence.Level" :competence="competence" />
    </template>
  </div>

  <div v-show="_toastMessage" class="toast">
    <div class="alert alert-info">
      <span> {{ _toastMessage }}</span>
    </div>
  </div>
</template>

<style scoped>
.card-spacing {
  margin: v-bind('_padding');
}
</style>
