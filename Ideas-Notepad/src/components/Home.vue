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
                  :description="idea.description"
                  @edit="editIdeaDialog"
                  @delete="deleteIdea"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IdeaCard from "@/components/IdeaCard.vue";
import {defineAsyncComponent, onMounted, reactive, ref} from "vue";
import Button from "@/components/common/Button.vue";
import {FALibraryIcons} from "@/font-awesome-icons";
import {AddIdea, ClearIdeas, DeleteIdea, EditIdea, GetIdea, GetIdeas} from "@/components/api";

const NewIdeaDialog = defineAsyncComponent(() => import("@/components/NewIdeaDialog.vue"))

const newIdeaTemplate: Readonly<IIdeaContent> = {
  id: '',
  title: '',
  description: ''
}

const ideas = ref<IIdeaContent[]>([])
let currentIdea = ref<IIdeaContent | null>({} as IIdeaContent)
let ideaDialogData = ref<IIdeaContent>({} as IIdeaContent)

let editing = ref(false)
let visible = ref(false);

const editIdeaDialog = async (id: string) => {
  await getIdea(id)
  toggleNewIdeaDialog(currentIdea.value)
}

const toggleNewIdeaDialog = (idea: IIdeaContent | null = null) => {
  setIdeaDialogData(idea)
  visible.value = !visible.value
}

const setIdeaDialogData = (idea: IIdeaContent | null) => {
  ideaDialogData.value = {} as IIdeaContent

  const newIdeaData = (idea === null) ? newIdeaTemplate : idea
  editing.value = (idea !== null)
  Object.assign(ideaDialogData.value, newIdeaData)
}


const getIdeas = () => {
  GetIdeas()
    .then((res: IIdeaContent[]) => {
      ideas.value.length = 0;
      ideas.value.push(...res)
    })
}

const getIdea = async (id: string): (IIdeaContent | null) => {
  await GetIdea(id)
    .then((idea: IIdeaContent) => {
      currentIdea.value = idea
    })
    .catch((error) => {
      console.error('Could not get idea: ', error)
      currentIdea.value = null
    })
}

const saveIdea = (ideaData: IIdeaContent) => {

  if (editing.value) {
    EditIdea(ideaData.id, ideaData)
      .then(() => {
        getIdeas()
      })
  } else {
    AddIdea(ideaData)
      .then(() => {
        getIdeas()
      })
  }
}

const deleteIdea = (id: string) => {
  // TODO Make this something better (ex. custom component)
  const confirmDelete = confirm('Are you sure you want to delete this idea? It will be deleted forever.')

  if (confirmDelete) {
    DeleteIdea(id)
      .then(() => {
        // TODO switch to some type of alert
        console.log('Deleted Idea')
        getIdeas()
      })
  }
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
