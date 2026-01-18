<template>
  <Dialog v-model:visible="visible"
          header="New Idea">
    <div class="new-idea-body">
      <TextInput v-model="ideaContent.title"
                 label="Idea Title"
                 full-width/>
      <TextArea v-model="ideaContent.description"
                label="Description"
                class="idea-description"/>
    </div>
    <hr>
    <div class="control-buttons">
      <Button label="Close" @click="closeDialog"/>
      <Button label="Save" @click="saveDialog"/>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "@/components/common/Dialog.vue";
import TextInput from "@/components/common/TextInput.vue";
import TextArea from "@/components/common/TextArea.vue";
import Button from "@/components/common/Button.vue";
import {ref} from "vue";

const emit = defineEmits(['save'])

const visible = defineModel<boolean>('visible', {default: false})

let ideaContent = ref({
  title: '',
  description: ''
})

const closeDialog = () => {
  visible.value = false
}

const saveDialog = () => {
  emit('save', ideaContent.value)
  visible.value = false
}

</script>

<style scoped lang="scss">
dialog {
  width: 30rem;
  min-height: 30rem;

  .new-idea-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: .5rem;
    padding-bottom: 1rem;

    .idea-description {
      height: 15rem;
    }
  }

  .control-buttons {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
