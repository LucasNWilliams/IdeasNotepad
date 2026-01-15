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

<style scoped>
.idea-card {
  --card-background-color: color-mix(in oklab, var(--main-background-color) 85%, white);
  --description-background-color: color-mix(in oklab, var(--main-background-color) 73%, white);

  width: 20rem;
  max-width: 30rem;
  height: 20rem;
  max-height: 30rem;
  background-color: var(--card-background-color);
  border-radius: 1rem;
  padding: .5rem 1.5rem;

  .idea-description {
    background-color: var(--description-background-color);
    border-radius: .5rem;
    padding: .5rem .75rem;
  }
}
</style>
