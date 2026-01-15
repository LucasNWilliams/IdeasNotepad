<template>
  <div class="idea-card">
    <h2>{{ ideaTitle }}</h2>
    <p class="idea-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const ideaTitle = ref('Idea #1');
const description = ref('This is a description of the idea.');

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

  .idea-description {
    background-color: var(--description-background-color);
    border-radius: .5rem;
    padding: .5rem .75rem;
    max-height: calc(var(--idea-card-max-height) - 6.25rem);
    height: calc(var(--idea-card-height) - 6.25rem);
  }
}
</style>
