<template>
  <div class="idea-card">
    <div class="idea-card-header">
      <div class="idea-card-title-container">
        <h2 v-if="title" class="idea-card-title">
          {{ title }}
        </h2>
      </div>
      <div class="idea-card-buttons">
        <Button :icon="FALibraryIcons.faPen" @click="onEdit"/>
        <Button :icon="FALibraryIcons.faTrashCan" @click="onDelete"/>
      </div>
    </div>
    <p class="idea-description">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/common/Button.vue";
import {FALibraryIcons} from "@/font-awesome-icons";
import {GetIdea} from "@/components/api";

interface IIdeaCardProps {
  id: string
  title: string,
  description: string
}

const props = defineProps<IIdeaCardProps>()
const emit = defineEmits(['edit', 'delete'])

const onEdit = () => {
  emit('edit', props.id)
}

const onDelete = () => {
  emit('delete', props.id)
}

// CSS Visibility: hidden / visible

</script>

<style scoped lang="scss">
.idea-card {
  --card-background-color: color-mix(in oklab, var(--main-background-color) 88%, white);
  --description-background-color: color-mix(in oklab, var(--main-background-color) 75%, white);

  --idea-card-height: 20rem;
  --idea-card-max-height: 30rem;

  width: 20rem;
  max-width: 30rem;
  height: var(--idea-card-height);
  max-height: var(--idea-card-max-height);
  background-color: var(--card-background-color);
  border-radius: 1rem;
  padding: .5rem 1.5rem;

  display: flex;
  flex-direction: column;

  .idea-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .idea-card-title-container {
      overflow: hidden;
      min-height: 4.25rem;

      .idea-card-title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    .idea-card-buttons {
      display: flex;
      height: 100%;
    }
  }

  .idea-description {
    background-color: var(--description-background-color);
    border-radius: .5rem;
    padding: 1rem 1rem;
    max-height: calc(var(--idea-card-max-height) - 6.25rem);
    height: calc(var(--idea-card-height) - 6.25rem);
    flex-grow: 1;
  }
}
</style>
