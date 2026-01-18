<template>
  <div>
    <h1>Ideas Notepad</h1>
    <p>Write your ideas here!</p>

    <NewIdeaDialog v-model:visible="visible"
                   :new-idea="ideaDialogData"
                   @save="saveIdea"/>

    <Button :icon="FALibraryIcons.faPlus"
            label="Make Idea"
            @click="toggleNewIdeaDialog()"/>
    <Button @click="ClearIdeas">Clear Ideas</Button>

    <ul class="ideas-list">
      <li v-for="idea in ideas" :key="idea.id">
        <IdeaCard :id="idea.id"
                  :title="idea.title"
                  :description="idea.description"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IdeaCard from "@/components/IdeaCard.vue";
import {defineAsyncComponent, onMounted, reactive, ref} from "vue";
import Button from "@/components/common/Button.vue";
import {FALibraryIcons} from "@/font-awesome-icons";
import {AddIdea, ClearIdeas, GetIdeas} from "@/components/api";

const NewIdeaDialog = defineAsyncComponent(() => import("@/components/NewIdeaDialog.vue"))

const newIdeaTemplate: IIdeaContent = {
  id: '',
  title: '',
  description: ''
}

const ideas = reactive<IIdeaContent[]>([])
let ideaDialogData = ref<IIdeaContent>({} as IIdeaContent)

let visible = ref(false);

const toggleNewIdeaDialog = (idea: IIdeaContent | null = null) => {
  setIdeaDialogData(idea)
  visible.value = !visible.value
}

const setIdeaDialogData = (idea: IIdeaContent | null) => {
  ideaDialogData.value = {} as IIdeaContent

  const newIdeaData = (idea === null) ? newIdeaTemplate : idea
  Object.assign(ideaDialogData.value, newIdeaData)
}


const getIdeas = () => {
  GetIdeas()
    .then((res) => {
      ideas.length = 0;
      ideas.push(...res)
      console.log(ideas)
    })
}

const saveIdea = (ideaData: IIdeaContent) => {

  AddIdea(ideaData)
    .then(() => {
      getIdeas()
    })
}

onMounted(() => {
  getIdeas()
})

</script>

<style scoped lang="scss">
.ideas-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 2rem;
}
</style>
