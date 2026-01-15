<template>
  <dialog ref="dialog" class="baseDialog">
    <header>
      <button @click="closeDialog">close</button>
    </header>
    <slot/>
  </dialog>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

const visible = defineModel<boolean>('visible', {default: false})

const dialog = ref<HTMLDialogElement>()

watch(visible, (newValue) => {
  return newValue ? openDialog() : closeDialog()
})

const openDialog = () => {
  dialog.value?.showModal()
  visible.value = true
}

const closeDialog = () => {
  dialog.value?.close()
  visible.value = false
}

</script>

<style scoped>
.baseDialog {
  width: 20rem;
  height: 10rem;
  padding: 1.5rem;
  border-radius: 1.5rem;

  header {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
