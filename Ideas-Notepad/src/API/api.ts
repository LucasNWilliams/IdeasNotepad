import crud from "@/API/crud";


function GetData<T>(url: string) {
  return crud.GetAllLocalStorage<T>(url)
}

function PostData<T>(url: string, value: T & { id: string }) {
  return crud.CreateLocalStorage<T>(url, value)
}

function PutData<T>(url: string, id: string, value: T) {
  return crud.UpdateLocalStorage<T>(url, id, value)
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
