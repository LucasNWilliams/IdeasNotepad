<template>
  <div class="idea-card">
    <div class="idea-card-header">
      <slot name="header-left"/>
      <div class="idea-card-title-right">
        <div class="idea-card-title-container">
          <h2 v-if="title" class="idea-card-title">
            {{ title }}
          </h2>
        </div>
        <slot name="header-right"/>
      </div>
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
    justify-content: start;
    align-items: center;
    gap: 1rem;

    .idea-card-title-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;

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

}
</style>
