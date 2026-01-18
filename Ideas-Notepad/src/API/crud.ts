function GetAllLocalStorage(storageKey: string): Promise<object[]> {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem(storageKey) == null) {
      reject('Key does not exist')
    } else {
      const retrievedData = JSON.parse(localStorage.getItem(storageKey) || '{}')
      resolve(retrievedData)
    }
  })
}

function GetSingleLocalStorage(storageKey: string, id: string) {
  return new Promise(async (resolve, reject) => {
    const localStorageArray = await GetAllLocalStorage(storageKey)

    const selectedItem = localStorageArray.find((item) => item.id === id)

    if (selectedItem != undefined) {
      resolve(selectedItem)
    } else {
      reject('Id does not exist')
    }

  })
}

function SetLocalStorage(storageKey: string, value: object[]): Promise<void> {
  return new Promise((resolve) => {
    localStorage.setItem(storageKey, JSON.stringify(value || '{}'))
    resolve()
  })
}

function CreateLocalStorage(storageKey: string, value: object): Promise<void> {
  return new Promise(async (resolve) => {
    const localStorageArray = await GetAllLocalStorage(storageKey)

    const newIdObject = {
      id: self.crypto.randomUUID()
    }
    Object.assign(value, newIdObject)

    localStorageArray.push(value)
    resolve(SetLocalStorage(storageKey, localStorageArray))
  })
}

function UpdateLocalStorage(storageKey: string, id: string, value: object) {
  return new Promise(async (resolve, reject) => {
    const localStorageArray = await GetAllLocalStorage(storageKey)

    const updatedItemIndex = localStorageArray.indexOf((item: { id: string }) => item.id === id)

    if (updatedItemIndex != undefined) {
      Object.assign(localStorageArray[updatedItemIndex], value)
      resolve(SetLocalStorage(storageKey, localStorageArray))
    } else {
      reject('Id does not exist')
    }

  })
}

function DeleteLocalStorage(storageKey: string, id: string) {
  return new Promise(async (resolve, reject) => {
    const localStorageArray = await GetAllLocalStorage(storageKey)

    const deletedItemIndex = localStorageArray.indexOf((item: { id: string }) => item.id === id)

    if (deletedItemIndex != undefined) {
      localStorageArray.splice(deletedItemIndex, 1)
      resolve(SetLocalStorage(storageKey, localStorageArray))
    } else {
      reject('Id does not exist')
    }
  })
}

export default {
  GetAllLocalStorage,
  GetSingleLocalStorage,
  SetLocalStorage,
  CreateLocalStorage,
  UpdateLocalStorage,
  DeleteLocalStorage
}
