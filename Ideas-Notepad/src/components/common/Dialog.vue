<template>
  <dialog ref="dialog" class="base-dialog">
    <header>
      <h2>{{ header }}</h2>
      <div class="dialog-header-left">
        <button @click="closeDialog">close</button>
      </div>
    </header>
    <hr>
    <slot/>
  </dialog>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

const visible = defineModel<boolean>('visible', {default: false})

interface IDialogProps {
  header?: string
}

const props = defineProps<IDialogProps>()

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

<style scoped lang="scss">
dialog::backdrop {
  background: black;
  opacity: .5;
}

.base-dialog {
  padding: 1.5rem;
  border-radius: 1.5rem;
  border-width: 4px;

  header {
    display: flex;
    justify-content: space-between;

    .dialog-header-left {
      display: flex;
      align-items: center;
    }
  }
}
</style>
