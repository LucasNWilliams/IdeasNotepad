function GetAllLocalStorage(storageKey: string): Promise<object[]> {
  return new Promise((resolve) => {
    if (localStorage.getItem(storageKey) == null) {
      void SetLocalStorage(storageKey, [])
    }
    const retrievedData = JSON.parse(localStorage.getItem(storageKey) || '[]')
    resolve(retrievedData)
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
    localStorage.setItem(storageKey, JSON.stringify(value || '[]'))
    resolve()
  })
}

function CreateLocalStorage(storageKey: string, value: { id?: string }): Promise<void> {
  return new Promise(async (resolve) => {
    const localStorageArray = await GetAllLocalStorage(storageKey)

    value.id = self.crypto.randomUUID()

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
  SetLocalStorage,
  CreateLocalStorage,
  UpdateLocalStorage,
  DeleteLocalStorage,
  ClearLocalStorageKey
}
