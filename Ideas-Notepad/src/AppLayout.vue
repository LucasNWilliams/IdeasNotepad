<template>
  <router-view/>
</template>

<script setup lang="ts">


import {onMounted, ref, watch} from "vue";
import {GetSettings} from "@/components/setings/settingsApi";
import {ISettings} from "@/components/setings/Settings.vue";

let root = ref<HTMLElement>({} as HTMLElement);

const settings = ref<ISettings>({
  darkMode: true
} as ISettings)

const darkMode = {
  mainBackground: '#282c34',
  textColor: '#ffffff',
  inputBorderColor: '#bdbfcd',
  backgroundColorMix: '#ffffff'
}

const lightMode = {
  mainBackground: '#e1e1e1',
  textColor: '#000000',
  inputBorderColor: '#393a40',
  backgroundColorMix: '#838383'
}

const setColorModeVariables = (darkModeValue: boolean) => {
  console.log(darkModeValue)
  if (darkModeValue) {
    root.value.style.setProperty('--main-background-color', darkMode.mainBackground)
    root.value.style.setProperty('--main-text-color', darkMode.textColor)
    root.value.style.setProperty('--input-border-color', darkMode.inputBorderColor)
    root.value.style.setProperty('--background-color-mix', darkMode.backgroundColorMix)
  } else {
    root.value.style.setProperty('--main-background-color', lightMode.mainBackground)
    root.value.style.setProperty('--main-text-color', lightMode.textColor)
    root.value.style.setProperty('--input-border-color', lightMode.inputBorderColor)
    root.value.style.setProperty('--background-color-mix', lightMode.backgroundColorMix)
  }
}

const getSettings = async () => {
  await GetSettings()
    .then(res => {
      Object.assign(settings.value, res)
      setColorModeVariables(settings.value.darkMode)
    })
}

watch(settings.value, (newSettings) => {
  setColorModeVariables(newSettings.darkMode)
})

onMounted(() => {
  root.value = document.documentElement
  getSettings()
})

</script>

<style scoped>

</style>
