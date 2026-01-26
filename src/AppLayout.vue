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
  mainBackground: '#1f2227',
  dialogBackground: '#2d2e32',
  textColor: '#ffffff',
  inputBorderColor: '#7d7e8a',
  inputShadowColor: '#555555',
  defaultShadowColor: '#454545',
  backgroundColorMix: '#dfdfdf',
  headerBackgroundColorMix: '#121317'
}

const lightMode = {
  mainBackground: '#e1e1e1',
  textColor: '#000000',
  inputBorderColor: '#393a40',
  backgroundColorMix: '#838383'
}

const setColorModeVariables = (darkModeValue: boolean) => {
  if (darkModeValue) {
    root.value.style.setProperty('--main-background-color', darkMode.mainBackground)
    root.value.style.setProperty('--dialog-background-color', darkMode.dialogBackground)
    root.value.style.setProperty('--main-text-color', darkMode.textColor)
    root.value.style.setProperty('--input-border-color', darkMode.inputBorderColor)
    root.value.style.setProperty('--input-shadow-color', darkMode.inputShadowColor)
    root.value.style.setProperty('--default-shadow-color', darkMode.defaultShadowColor)
    root.value.style.setProperty('--background-color-mix', darkMode.backgroundColorMix)
    root.value.style.setProperty('--header-background-color-mix', darkMode.headerBackgroundColorMix)
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
