<template>
  <div>
    <h1>Ideas Notepad</h1>
    <p>Write your ideas here!</p>

    <Button :icon="FALibraryIcons.faPlus"
            label="Make Idea"
            @click="toggleNewIdea"/>
    <Button @click="addIdea">Add Idea</Button>
    <Button @click="ClearIdeas">Clear Ideas</Button>

    <NewIdeaDialog v-model:visible="visible"/>
    <IdeaCard/>
  </div>
</template>

<script setup lang="ts">
import IdeaCard from "@/components/IdeaCard.vue";
import {defineAsyncComponent, onMounted, ref} from "vue";
import Button from "@/components/common/Button.vue";
import {FALibraryIcons} from "@/font-awesome-icons";
import {AddIdea, ClearIdeas, GetIdeas} from "@/components/api";

const NewIdeaDialog = defineAsyncComponent(() => import("@/components/NewIdeaDialog.vue"))

let visible = ref(false);

const toggleNewIdea = () => {
  visible.value = !visible.value;
}

const getIdeas = () => {
  GetIdeas()
    .then((res) => {
      console.log(res)
    })
}

const addIdea = () => {
  let idea = {
    title: Date.now().toString(),
    description: 'This is a test'
  }
  AddIdea(idea)
}

onMounted(() => {
  getIdeas()
})

</script>

<style scoped lang="scss">

</style>
