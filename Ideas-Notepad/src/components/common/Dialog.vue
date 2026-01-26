<template>
  <dialog ref="dialog" class="base-dialog">
    <header>
      <slot name="header">
        <h2>{{ header }}</h2>
      </slot>
      <div class="dialog-header-left">
        <Button :icon="FALibraryIcons.faCircleXmark"
                icon-size="2x"
                icon-only
                inverse
                @click="closeDialog"/>
      </div>
    </header>
    <hr>
    <slot/>
  </dialog>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {FALibraryIcons} from "@/font-awesome-icons";
import Button from "@/components/common/Button.vue";

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

<style lang="scss">
dialog::backdrop {
  background: black;
  opacity: .5;
}

.base-dialog {
  padding: 1.5rem;
  border-radius: 1.5rem;
  border-width: 2px;
  border-color: var(--input-border-color);
  background: var(--dialog-background-color);
  color: var(--main-text-color);

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
