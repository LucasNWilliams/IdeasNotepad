function GetAllLocalStorage<T>(storageKey: string): Promise<T> {
  return new Promise((resolve) => {
    if (localStorage.getItem(storageKey) == null) {
      void SetLocalStorage(storageKey, [])
    }
    setTimeout(() => {
      const retrievedData = JSON.parse(localStorage.getItem(storageKey) || '[]')
      resolve(retrievedData)
    }, 10)
  })
}

function GetSingleLocalStorage<T>(storageKey: string, id: string): Promise<T> {
  return new Promise(async (resolve, reject) => {
    const localStorageArray: (T & {id: string})[] = await GetAllLocalStorage(storageKey)

    const selectedItem = localStorageArray.find((item: T & { id: string }) => item.id === id)

    if (selectedItem != undefined) {
      resolve(selectedItem)
    } else {
      reject('Id does not exist')
    }

  })
}

function GetLocalStorageObject<T>(storageKey: string) {
  return new Promise((resolve) => {
    if (localStorage.getItem(storageKey) == null) {
      void SetLocalStorage<T>(storageKey, {} as T)
    }
    const retrievedObject = JSON.parse(localStorage.getItem(storageKey) || '{}')
    resolve(retrievedObject)
  })
}

function SetLocalStorage<T>(storageKey: string, value: T): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(storageKey, JSON.stringify(value || '[]'))
      resolve()
    }, 10)
  })
}

function CreateLocalStorage<T>(storageKey: string, value: T & { id: string }): Promise<void> {
  return new Promise(async (resolve) => {
    const localStorageArray: T[] = await GetAllLocalStorage(storageKey)

    value.id = self.crypto.randomUUID()

    localStorageArray.push(value)
    resolve(SetLocalStorage<T[]>(storageKey, localStorageArray))
  })
}

function UpdateLocalStorage<T>(storageKey: string, id: string, value: T) {
  return new Promise(async (resolve, reject) => {
    const localStorageArray: (T & {id: string})[] = await GetAllLocalStorage(storageKey)

    const updatedItemIndex = localStorageArray.findIndex((item: T & { id: string }) => item.id === id)

    if (updatedItemIndex != undefined) {
      Object.assign(localStorageArray[updatedItemIndex], value)
      resolve(SetLocalStorage<T[]>(storageKey, localStorageArray))
    } else {
      reject('Id does not exist')
    }

  })
}

function DeleteLocalStorage<T>(storageKey: string, id: string) {
  return new Promise(async (resolve, reject) => {
    const localStorageArray: (T & { id: string })[] = await GetAllLocalStorage(storageKey)

    const deletedItemIndex = localStorageArray.findIndex((item: { id: string }) => item.id === id)

    if (deletedItemIndex >= 0) {
      localStorageArray.splice(deletedItemIndex, 1)
      resolve(SetLocalStorage<T[]>(storageKey, localStorageArray))
    } else {
      reject('Id does not exist')
    }
  })
}

function ClearLocalStorageKey(storageKey: string) {
  let confirmOnce = confirm(`You are clearing every value for \"${storageKey}.\" Are you sure you want to continue?`)
  if (confirmOnce) {
    let confirmTwice = confirm(`Are you sure you want to clear \"${storageKey}?\"`)
    if (confirmTwice) {
      let confirmThrice = confirm(`Are you 100% sure you want to clear \"${storageKey}?\"`)
      if (confirmThrice) {
        alert(`Deleting all values for \"${storageKey}\"`)
        void SetLocalStorage(storageKey, [])
      }
    }
  }
}

export default {
  GetAllLocalStorage,
  GetSingleLocalStorage,
  GetLocalStorageObject,
  SetLocalStorage,
  CreateLocalStorage,
  UpdateLocalStorage,
  DeleteLocalStorage,
  ClearLocalStorageKey
}
