<script setup lang="ts">
import { ref } from 'vue'

const _props = defineProps<{ title?: string }>()

const _actionPending = ref(false)
function clicked() {
  _actionPending.value = true
  setTimeout(() => {
    _actionPending.value = false
  }, 5000)
}
</script>

<template>
  <div class="flex flex-col">
    <button class="btn rounded-full" v-bind="$attrs" @click="clicked">
      <template v-if="!_actionPending">
        <slot v-if="$slots.default" name="default"></slot>
        <span v-else>{{ title ?? 'Zatwierdź' }}</span>
      </template>
      <slot v-else name="pending"></slot>
    </button>
    <div>
      <slot name="below"></slot>
    </div>
  </div>
  <div></div>
</template>

<style scoped></style>
