import crud from "@/API/crud";


function GetData(url: string) {
  return crud.GetAllLocalStorage(url)
}

function PostData(url: string, value: object) {
  return crud.CreateLocalStorage(url, value)
}

function PutData(url: string, id: string, value: object,) {
  return crud.UpdateLocalStorage(url, id, value)
}

function DeleteData(url: string, id: string) {
  return crud.DeleteLocalStorage(url, id)
}

export default {
  GetData,
  PostData,
  PutData,
  DeleteData
}
