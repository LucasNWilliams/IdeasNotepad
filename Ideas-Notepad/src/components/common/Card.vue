<template>
  <div class="idea-card">
    <div class="idea-card-header">
      <div class="idea-card-title-container">
        <h2 v-if="title" class="idea-card-title">
          {{ title }}
        </h2>
      </div>
      <slot name="header-right"/>
    </div>
    <slot name="default"/>
  </div>
</template>

<script setup lang="ts">

interface ICardProps {
  id: string
  title: string,
}

const props = defineProps<ICardProps>()

</script>

<style lang="scss">
.idea-card {
  --card-background-color: color-mix(in oklab, var(--main-background-color) 83%, var(--background-color-mix));
  --description-background-color: color-mix(in oklab, var(--main-background-color) 74%, var(--background-color-mix));

  --idea-card-height: 20rem;
  --idea-card-max-height: 30rem;

  min-width: 20rem;
  max-width: 30rem;
  height: var(--idea-card-height);
  max-height: var(--idea-card-max-height);
  background-color: var(--card-background-color);
  border-radius: 1rem;
  padding: .5rem 1.5rem;
  box-shadow: var(--default-shadow-color) 6px 6px;

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
  }

}
</style>
