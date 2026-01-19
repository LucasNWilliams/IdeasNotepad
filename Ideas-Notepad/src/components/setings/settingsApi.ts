import crud from "@/API/crud";
import {ISettings} from "@/components/setings/Settings.vue";

const SettingsUrl = 'Settings'

const GetSettings = async () => {
  const url = SettingsUrl
  return await crud.GetLocalStorageObject(url)
}

// const CreateSettings = async (settings: ISettings) => {
//   const url = SettingsUrl
//   return await crud.SetLocalStorage(url, settings)
// }

const UpdateSettings = async (settings: ISettings) => {
  const url = SettingsUrl
  return await crud.SetLocalStorage(url, settings)
}

export {
  GetSettings,
  UpdateSettings
}
