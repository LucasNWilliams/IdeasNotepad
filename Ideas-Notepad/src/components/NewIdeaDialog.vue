<template>
  <Dialog v-model:visible="visible"
          header="New Idea">
    <div class="new-idea-body">
      <TextInput label="Idea"/>
      <TextArea class="idea-description" label="Description"/>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "@/components/common/Dialog.vue";
import TextInput from "@/components/common/TextInput.vue";
import TextArea from "@/components/common/TextArea.vue";

const visible = defineModel<boolean>('visible', {default: false})

</script>

<style scoped lang="scss">
dialog {
  width: 20rem;
  height: 25rem;

  .new-idea-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .idea-description {
      width: 100%;
      height: 15rem;
    }
  }
}
</style>
