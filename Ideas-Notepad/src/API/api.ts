import crud from "@/API/crud";


function GetData(storageKey: string) {
  return crud.GetLocalStorage(storageKey)
}

function PostData(storageKey: string, value: object) {
  return crud.CreateLocalStorage(storageKey, value)
}

function PutData(storageKey: string, value: object, id: string) {
  return crud.UpdateLocalStorage(storageKey, value, id)
}

function DeleteData(storageKey: string, id: string) {
  return crud.DeleteLocalStorage(storageKey, id)
}
