function GetLocalStorage(key: string): Promise<object[]> {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem(key) == null) {
      reject('Key does not exist')
    } else {
      const retrievedData = JSON.parse(localStorage.getItem(key) || '{}')
      resolve(retrievedData)
    }
  })
}

function SetLocalStorage(key: string, value: object[]): Promise<void> {
  return new Promise((resolve) => {
    localStorage.setItem(key, JSON.stringify(value || '{}'))
    resolve()
  })
}

function CreateLocalStorage(key: string, value: object): Promise<void> {
  return new Promise(async (resolve) => {
    const localStorageArray = await GetLocalStorage(key)

    const newIdObject = {
      id: self.crypto.randomUUID()
    }
    Object.assign(value, newIdObject)

    localStorageArray.push(value)
    resolve(SetLocalStorage(key, localStorageArray))
  })
}

function UpdateLocalStorage(key: string, value: object, id: string) {
  return new Promise(async (resolve, reject) => {
    const localStorageArray = await GetLocalStorage(key)

    const updatedItemIndex = localStorageArray.indexOf((item: { id: string }) => item.id === id)

    if (updatedItemIndex != undefined) {
      Object.assign(localStorageArray[updatedItemIndex], value)
      resolve(SetLocalStorage(key, localStorageArray))
    } else {
      reject('Id does not exist')
    }

  })
}

function DeleteLocalStorage(key: string, id: string) {
  return new Promise(async (resolve, reject) => {
    const localStorageArray = await GetLocalStorage(key)

    const deletedItemIndex = localStorageArray.indexOf((item: { id: string }) => item.id === id)

    if (deletedItemIndex != undefined) {
      localStorageArray.splice(deletedItemIndex, 1)
      resolve(SetLocalStorage(key, localStorageArray))
    } else {
      reject('Id does not exist')
    }
  })
}

export default {
  GetLocalStorage,
  SetLocalStorage,
  CreateLocalStorage,
  DeleteLocalStorage
}
