<template>
  <ConfirmationDialog v-model:visible="visible"
                      :header
                      :confirmation-message
                      danger-confirm-severity
                      @confirm="onConfirm"/>
</template>

<script setup lang="ts">
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";

interface IDeleteConfirmationDialogProps {
  header?: string
  confirmationMessage?: string,
  id: string
}

const header = "Delete Idea?"
const confirmationMessage = "Are you sure you want to delete this idea? It will be deleted forever."

const props = withDefaults(defineProps<IDeleteConfirmationDialogProps>(), {
  header: header,
  confirmationMessage: confirmationMessage
})
const emit = defineEmits(['confirm'])

const visible = defineModel<boolean>('visible', {default: false})

const onConfirm = (confirmationStatus: boolean) => {
  emit('confirm', confirmationStatus, props.id)
}

</script>

<style scoped
       lang="scss">

</style>
