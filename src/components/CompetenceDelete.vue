<script setup lang="ts">
import { Icon } from '@iconify/vue'

import type { Competence } from '@/types/Competence'

const _props = defineProps<{ competence: Competence }>()

const _emit = defineEmits<{
  deleted: [deletedCompetence: Competence]
}>()

function remove() {
  _emit('deleted', _props.competence)
}

function showModal() {
  if (!document) return

  const modal = document.getElementById(`competence_delete_modal${_props.competence.Id}`) as HTMLDialogElement
  modal.showModal()
}
</script>

<template>
  <button class="btn btn-error btn-sm text-white" @click="showModal"><Icon icon="mdi:delete-empty-outline" /></button>

  <dialog :id="`competence_delete_modal${competence.Id}`" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Usuń kompetencje</h3>
      <p class="py-4">Czy na pewno usunąć {{ competence.Name }}?</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Anuluj</button>
        </form>
        <button @click="remove()" class="btn btn-error text-white">Usuń</button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>Zamknij</button>
    </form>
  </dialog>
</template>

<style scoped></style>
