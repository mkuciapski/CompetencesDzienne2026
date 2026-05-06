<script setup lang="ts">
// 1. Możliwość poprawnego edytowania nowo dodanych kompetencji [problem z ID: -1] DONE
// 2. Funkcjonalność usuwania kompetencji jako nowy komponent (dialog, czerwony przycisk w prawym gornym rogu karty ) DONE
// [3]. Optymalizacja wizualna przycisków (ikony, itp... - https://icon-sets.iconify.design) - w trakcie
// [4]. Ikony usunięcie/edycja pojawiają się po najechaniu

import { competences } from '@/assets/competences'
import { computed, ref, watch } from 'vue'
import CompetenceCard from '@/components/CompetenceCard.vue'
import CompetenceDefine from '@/components/CompetenceDefine.vue'
import type { Competence } from '@/types/Competence'

// #region LIST
const _searchText = ref('')

const _competences = ref(competences)
const _filteredCompetences = computed(() => {
  const searchText = _searchText.value.trim()
  return _competences.value.filter((competence) => competence.Name.toLowerCase().includes(searchText))
})

// setTimeout(() => {
//   _competences.value[0]!.Description = 'Wolę Tailwinda'
//   _competences.value.push({ Id: 11, Name: 'C++', Level: 4, Picture: 'bootstrap.svg', Description: 'Wersja 3' })
// }, 4000)
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

function addCompetence(addedCompetence: Competence) {
  const lastCompetence = _competences.value[_competences.value.length - 1]

  const newCompetence = {
    Id: lastCompetence!.Id + 1,
    Name: addedCompetence.Name,
    Level: addedCompetence.Level,
    Picture: addedCompetence.Picture,
    Description: addedCompetence.Description,
  }

  _competences.value.push(newCompetence)
}

function modifyCompetence(modifiedCompetence: Competence) {
  const competenceInList = _competences.value.find((competence) => competence.Id === modifiedCompetence.Id)

  if (!competenceInList) return

  competenceInList.Name = modifiedCompetence.Name
  competenceInList.Level = modifiedCompetence.Level
  competenceInList.Picture = modifiedCompetence.Picture
  competenceInList.Description = modifiedCompetence.Description
}

function deleteCompetence(deletedCompetence: Competence) {
  _competences.value = _competences.value.filter((competence) => competence.Id !== deletedCompetence.Id)
}
</script>

<template>
  <div class="flex justify-end">
    <CompetenceDefine @added="addCompetence" />
  </div>

  <div class="join">
    <button class="btn join-item text-white bg-green-800">Podaj nazwę kompetencji</button>
    <input type="text" v-model="_searchText" />
  </div>
  <div class="flex flex-wrap justify-center">
    <template v-for="competence in _filteredCompetences" :key="competence.Id">
      <CompetenceCard v-if="competence.Level" :competence="competence" @modified="modifyCompetence" @deleted="deleteCompetence" />
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
