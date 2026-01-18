<template>
  <div>
    <h1>Ideas Notepad</h1>
    <p>Write your ideas here!</p>

    <Button :icon="FALibraryIcons.faPlus"
            label="Make Idea"
            @click="toggleNewIdea"/>

    <NewIdeaDialog v-model:visible="visible"/>
    <IdeaCard/>
  </div>
</template>

<script setup lang="ts">
import IdeaCard from "@/components/IdeaCard.vue";
import {defineAsyncComponent, ref} from "vue";
import Button from "@/components/common/Button.vue";
import {FALibraryIcons} from "@/font-awesome-icons";

const NewIdeaDialog = defineAsyncComponent(() => import("@/components/NewIdeaDialog.vue"))

let visible = ref(false);

const toggleNewIdea = () => {
  visible.value = !visible.value;
}
</script>

<style scoped lang="scss">

</style>
