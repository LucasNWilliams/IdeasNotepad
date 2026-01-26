<template>
  <div class="page-header">
    <h1><span class="fancy-font">Fancy</span> Idea Notepad</h1>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page-header {
  --page-header-background: color-mix(in oklab, var(--main-background-color) 45%, var(--header-background-color-mix));

  display: flex;
  justify-content: center;
  width: 100%;
  background: var(--page-header-background);
  margin: -.5rem;
  margin-bottom: 2rem;
  padding: .5rem;

  .fancy-font {
    font-family: "Brush Script MT", cursive;
    font-weight: 400;
  }
}
</style>
