<template>
  <div>
    <div>
      <Switch v-model="settings.spellcheckTextArea"
              label="Spellcheck for text areas"/>
      <Switch v-model="settings.darkMode"
              label="Dark Mode"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switch from "@/components/common/Switch.vue";
import {onMounted, ref, watch} from "vue";
import {UpdateSettings, GetSettings} from "@/components/setings/settingsApi";

export interface ISettings {
  darkMode: boolean
  spellcheckTextArea: boolean
}

let settings = ref<ISettings>({
  darkMode: true,
  spellcheckTextArea: false
})

watch(settings.value, (newSettings) => {
  updateSettings(newSettings)
})

const objectIsEmpty = (obj: object) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false
    }
  }

  return true
}

const getSettings = async () => {
  await GetSettings()
    .then((res: ISettings) => {
      if (objectIsEmpty(res)) {
        updateSettings(settings.value)
      } else {
        Object.assign(settings.value, res)
      }
    })
}

const updateSettings = async (settings: ISettings) => {
  await UpdateSettings(settings)
    .then(() => {
      getSettings()
    })
}

onMounted(() => {
  getSettings()
})
</script>

<style scoped lang="scss">

</style>
