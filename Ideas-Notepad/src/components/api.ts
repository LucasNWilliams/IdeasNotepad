import api from "@/API/api";
import crud from "@/API/crud";

const IdeasListKey = 'Ideas'

const GetIdeas = (): Promise<IIdeaContent> => {
  const url = IdeasListKey
  return api.GetData(url)
}

const GetIdea = (id: string) => {
  const url = IdeasListKey
  return crud.GetSingleLocalStorage(url, id)
}

const AddIdea = (idea: object) => {
  const url = IdeasListKey
  return api.PostData(url, idea)
}

const EditIdea = (id: string, idea: object) => {
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
  AddIdea,
  EditIdea,
  DeleteIdea,
  ClearIdeas
}
