<template>
  <NewIdeaDialog v-model:visible="visible"
                 :new-idea="ideaDialogData"
                 :title="ideaDialogHeader"
                 @save="saveIdea"/>

  <DeleteConfirmationDialog v-model:visible="deleteVisible"
                            :id="deleteIdeaId"
                            @confirm="deleteIdea"/>

  <div class="home-body">
    <PageHeader/>

    <div class="ideas">
      <Button :icon="FALibraryIcons.faPlus"
              label="Make Idea"
              class="new-idea-button"
              @click="toggleNewIdeaDialog()"/>

<!--      <Button label="Primary"/>-->
<!--      <Button label="Secondary" secondary/>-->
<!--      <Button label="Warning" warning/>-->
<!--      <Button label="Danger" danger/>-->
<!--      <Button label="Success" success/>-->
<!--      <Button label="Info" info/>-->

      <ul class="ideas-list">
        <li v-for="idea in ideas" :key="idea.id">
          <IdeaCard :idea="idea"
                    @click="editIdeaDialog"
                    @star="saveIdea"
                    @delete="toggleDeleteDialog"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, defineAsyncComponent, onMounted, ref} from "vue";
import Button from "@/components/common/Button.vue";
import {FALibraryIcons} from "@/font-awesome-icons";
import {AddIdea, ClearIdeas, DeleteIdea, EditIdea, GetIdea, GetIdeas} from "@/components/api";
import IdeaCard from "@/components/IdeaCard.vue";
import PageHeader from "@/components/PageHeader.vue";
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";
import DeleteConfirmationDialog from "@/components/DeleteConfirmationDialog.vue";

const NewIdeaDialog = defineAsyncComponent(() => import("@/components/NewIdeaDialog.vue"))

const newIdeaTemplate: Readonly<IIdeaContent> = {
  id: '',
  title: '',
  description: '',
  favorite: false
}

const ideas = ref<IIdeaContent[]>([])
let currentIdea = ref<IIdeaContent | null>({} as IIdeaContent)
let ideaDialogData = ref<IIdeaContent>({} as IIdeaContent)

const ideaDialogHeader = computed(() => {
  return editing.value ? '' : 'New Idea'
})

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

let deleteVisible = ref(false)
let deleteIdeaId = ref<string>('')

const toggleDeleteDialog = (id: string) => {
  deleteVisible.value = !deleteVisible.value
  deleteIdeaId.value = id
}

const getIdeas = () => {
  GetIdeas()
    .then((res: IIdeaContent[]) => {
      ideas.value.length = 0;
      ideas.value.push(...res)
    })
}

const getIdea = async (id: string) => {
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
  if (ideaData.id != '') {
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

const deleteIdea = (confirmation: boolean, id: string) => {
  if (confirmation) {
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
.home-body {
  min-height: 75vh;

  .ideas {
    --ideas-list-background: color-mix(in oklab, var(--main-background-color) 93%, var(--background-color-mix));

    min-height: inherit;
    background: var(--ideas-list-background);
    border-radius: 2rem;
    padding: 1rem;
    margin: 1.5rem 1.5rem 3rem;

    .new-idea-button {
      margin-left: 2.75rem;
    }

    .ideas-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      grid-column-gap: 3.5rem;
      grid-row-gap: 2rem;
      list-style: none;
      padding: 1rem 2rem .5rem;
    }
  }
}
</style>
