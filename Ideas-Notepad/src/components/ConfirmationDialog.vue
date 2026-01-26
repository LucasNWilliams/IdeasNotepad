<template>
  <Dialog v-model:visible="visible" class="confirmation-dialog" :header>
    <div>
      <p>{{ confirmationMessage }}</p>
    </div>
    <div class="control-buttons">
      <Button label="Close" @click="closeDialog"/>
      <Button :label="confirmLabel" @click="saveDialog"/>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "@/components/common/Dialog.vue";
import Button from "@/components/common/Button.vue";

interface IConfirmationDialogProps {
  header: string,
  confirmationMessage?: string
  confirmLabel?: string
}

const props = withDefaults(defineProps<IConfirmationDialogProps>(), {
  confirmLabel: 'Confirm'
})
const emit = defineEmits(['confirm'])

const visible = defineModel<boolean>('visible', {default: false})

const closeDialog = () => {
  visible.value = false
}

const saveDialog = () => {
  emit('confirm', true)
  visible.value = false
}

</script>

<style scoped lang="scss">
.confirmation-dialog {
  min-height: 10rem;
  width: 30rem;

  padding: .5rem 1.5rem;
}
</style>
