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

function generateRandomString(length: number): string {
  let string = ''
  const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

  for (let i = 0; i < length; i++) {
    string += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
  }
  return string
}

function CreateLocalStorage(key: string, value: object[]): Promise<void> {
  return new Promise(async (resolve) => {
    const localStorageArray = await GetLocalStorage(key)

    // Warn Extremely tiny possibility of duplicate ids
    const newIdObject = {
      id: generateRandomString(16)
    }
    Object.assign(value, newIdObject)

    localStorageArray.push(value)
    resolve(SetLocalStorage(key, value))
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
      reject()
    }
  })
}

export default {
  GetLocalStorage,
  SetLocalStorage,
  CreateLocalStorage,
  DeleteLocalStorage
}
