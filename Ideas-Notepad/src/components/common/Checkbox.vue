<template>
  <label class="checkbox-container">
    <FontAwesomeIcon :icon="currentIcon"
                     :style="{ color: iconColor }"
                     size="lg"/>
    <input type="checkbox"
           v-model="inputValue"
           class="checkbox"/>
  </label>

</template>

<script setup lang="ts">

import {computed, ref, watch} from "vue";
import {FALibraryIcons} from "@/font-awesome-icons";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

interface ISwitchProps {
  modelValue: boolean
  icon: typeof FALibraryIcons | IconDefinition
  toggledIcon: typeof FALibraryIcons | IconDefinition
  label?: string
  color?: string
}

const props = defineProps<ISwitchProps>()
const emit = defineEmits(['update:model-value', 'change'])

// const inputValue = ref(false)
// watch(() => props.modelValue, (newModelValue) => {
//   inputValue.value = newModelValue
// }, {immediate: true})
//
// watch(inputValue, (newValue) => {
//   emit('update:model-value', newValue)
//   emit('change', newValue)
// }, {immediate: true})

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:model-value', value)
})

const currentIcon = computed(() => {
  return inputValue.value ? props.toggledIcon : props.icon
})

const iconColor = computed(() => {
  return (inputValue.value) ? props.color : undefined
})

// TODO Add catch for if input value is boolean or string
</script>

<style scoped lang="scss">
.checkbox-container {
  display: flex;

  .checkbox {
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    appearance: none;
  }
}
</style>
