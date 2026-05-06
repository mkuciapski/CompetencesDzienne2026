<script setup lang="ts">
import type { InfoModel } from '@/types/InfoModel'
import CompetenceDefine from '@/components/CompetenceDefine.vue'
import CompetenceDelete from '@/components/CompetenceDelete.vue'
defineProps<{ info: InfoModel }>()

const _emit = defineEmits<{
  modified: [addedCompetence: InfoModel]
  deleted: [deletedCompetence: InfoModel]
}>()
</script>

<template>
  <div class="card bg-base-100 w-48 shadow-sm card-spacing">
    <div class="flex justify-end">
      <CompetenceDelete @deleted="(competence) => _emit('deleted', competence)" :competence="info" />
    </div>
    <h2 class="text-center text-xl uppercase">{{ info.Name }}</h2>
    <img :src="`assets/${info.Picture}`" />
    <div class="card-body">
      <p :class="[info.Level < 3 ? 'text-red-500' : info.Level > 3 ? 'text-green-500' : '']">Poziom: {{ info.Level }}</p>
      <p v-if="info.Description">Opis: {{ info.Description }}</p>
    </div>
    <div class="flex justify-end">
      <CompetenceDefine @modified="(competence) => _emit('modified', competence)" :competence="info" />
    </div>
  </div>
</template>

<style scoped></style>
