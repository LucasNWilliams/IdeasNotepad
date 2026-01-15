<template>
  <div>
    <h1>Ideas Notepad</h1>
    <p>write your ideas here</p>

    <button @click="toggleNewIdea">+ Make Idea</button>

    <NewIdeaDialog v-model:visible="visible"/>
    <IdeaCard/>
  </div>
</template>

<script setup lang="ts">
import IdeaCard from "@/components/IdeaCard.vue";
import NewIdeaDialog from "@/components/NewIdeaDialog.vue";
import {ref} from "vue";

let visible = ref(false);

const toggleNewIdea = () => {
  visible.value = !visible.value;
}
</script>

<style scoped lang="scss">

</style>
