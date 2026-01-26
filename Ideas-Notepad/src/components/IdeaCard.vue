<template>
  <Card :id="idea.id"
        :title="idea.title"
        @click="onClick">
    <template #header-right>
      <div class="idea-card-buttons">
        <Button :icon="FALibraryIcons.faPen"/>
        <Button :icon="FALibraryIcons.faTrashCan" @click.stop="onDelete"/>
      </div>
    </template>
    <template #default>
      <TextArea v-model="idea.description"
                class="idea-description"
                readonly/>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from "@/components/common/Card.vue";
import {FALibraryIcons} from "@/font-awesome-icons";
import Button from "@/components/common/Button.vue";
import TextArea from "@/components/common/TextArea.vue";

interface IIdeaCardProps {
  idea: IIdeaContent
}

const props = defineProps<IIdeaCardProps>()
const emit = defineEmits(['edit', 'delete', 'click'])

const onEdit = () => {
  emit('edit', props.idea.id)
}

const onDelete = () => {
  emit('delete', props.idea.id)
}

const onClick = () => {
  emit('click', props.idea.id)
}
</script>

<style lang="scss">
.idea-card {
  cursor: pointer;
  transition: .2s;

  .idea-card-buttons {
    /* TODO decide if I actually want to have the buttons hidden */
    display: flex;
    height: 100%;
    opacity: 0;
    transition: .3s;
  }

  .idea-description {
    textarea {
      border-radius: .5rem;
      padding: 1rem 1rem;
      max-height: calc(var(--idea-card-max-height) - 8.25rem);
      height: calc(var(--idea-card-height) - 7.5rem);
      flex-grow: 1;
      transition: .2s;
      color: var(--main-text-color)
    }
  }

  /* TODO decide if I actually want to have the buttons hidden */
  --card-background-color-hover: color-mix(in oklab, var(--card-background-color) 80%, var(--main-background-color));
  --card-description-background-color-hover: color-mix(in oklab, var(--description-background-color) 61%, var(--card-background-color-hover));

  &:hover {
    background-color: var(--card-background-color-hover);

    .idea-card-buttons {
      opacity: 1;
    }

    .idea-description {
      textarea {
        background-color: var(--card-description-background-color-hover)
      }
    }
  }

}

</style>
