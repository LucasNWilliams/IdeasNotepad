import api from "@/API/api";
import crud from "@/API/crud";

const IdeasListKey = 'Ideas'

const GetIdeas = () => {
  const url = IdeasListKey
  return api.GetData<IIdeaContent[]>(url)
}

const GetIdea = (id: string) => {
  const url = IdeasListKey
  return crud.GetSingleLocalStorage<IIdeaContent>(url, id)
}

const AddIdea = (idea: IIdeaContent) => {
  const url = IdeasListKey
  return api.PostData(url, idea)
}

const EditIdea = (id: string, idea: IIdeaContent) => {
  const url = IdeasListKey
  return api.PutData(url, id, idea)
}

const DeleteIdea = (id: string) => {
  const url = IdeasListKey
  return api.DeleteData(url, id)
}

const ClearIdeas = () => {
  const url = IdeasListKey
  return crud.ClearLocalStorageKey(url)
}

export {
  GetIdeas,
  GetIdea,
  AddIdea,
  EditIdea,
  DeleteIdea,
  ClearIdeas
}
