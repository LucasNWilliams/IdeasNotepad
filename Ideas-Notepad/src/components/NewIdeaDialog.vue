<template>
  <Dialog v-model:visible="visible" :header="title" class="new-idea-dialog">
    <template v-if="newIdea.id" #header>
      <TextInput v-model="newIdea.title"
                 full-width/>
    </template>
    <div class="new-idea-body">
      <TextInput v-if="!newIdea.id"
                 v-model="newIdea.title"
                 label="Idea Title"
                 full-width/>
      <TextArea v-model="newIdea.description"
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

interface INewIdeaDialog {
  newIdea: IIdeaContent
  title?: string
}

const props = defineProps<INewIdeaDialog>()
const emit = defineEmits(['save'])

const visible = defineModel<boolean>('visible', {default: false})

const closeDialog = () => {
  visible.value = false
}

const saveDialog = () => {
  emit('save', props.newIdea)
  visible.value = false
}

</script>

<style lang="scss">
.new-idea-dialog {
  --dialog-min-height: 30rem;

  width: 30rem;
  min-height: var(--dialog-min-height);

  .new-idea-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: .5rem;
    padding-bottom: 1rem;

    .idea-description {
      width: 20rem;
      height: calc(var(--dialog-min-height) * .75);
    }
  }
}

.control-buttons {
  display: flex;
  justify-content: flex-end;
}
</style>
