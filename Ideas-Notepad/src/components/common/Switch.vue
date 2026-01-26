<template>
  <div class="switch">
    <label>{{ label }}</label>
    <label class="switch-body">
      <input type="checkbox" v-model="inputValue"/>
      <span class="slider"></span>
    </label>
  </div>
</template>

<script setup lang="ts">

import {ref, watch} from "vue";

interface ISwitchProps {
  modelValue: boolean
  label?: string
}

const props = defineProps<ISwitchProps>()
const emit = defineEmits(['update:model-value', 'change'])

const inputValue = ref()
watch(() => props.modelValue, (newModelValue) => {
  inputValue.value = newModelValue
}, {immediate: true})

watch(inputValue, (newValue) => {
  emit('update:model-value', newValue)
  emit('change', newValue)
}, {immediate: true})

// TODO Add catch for if input value is boolean or string
</script>

<style scoped
       lang="scss">
.switch {
  display: flex;
  flex-direction: column;
  min-width: var(--width-of-switch);
  min-height: var(--height-of-switch);
  gap: .5rem;
  margin: .5rem;

  .switch-body {
    --width-of-switch: 3.5rem;
    --height-of-switch: 1.9rem;
    --size-of-icon: 1.2rem;
    --slider-offset: .3rem;
    --slider-background: color-mix(in oklab, var(--main-background-color) 10%, white);
    --checked-slider-background: color-mix(in oklab, var(--slider-background) 20%, #08a508);
    --transition-time: .25s;

    position: relative;
    display: inline-block;
    width: var(--width-of-switch);
    height: var(--height-of-switch);

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--slider-background);
      transition: var(--transition-time);
      border-radius: 2rem;

      &:before {
        border-radius: 1rem;
        position: absolute;
        height: var(--size-of-icon);
        width: var(--size-of-icon);
        content: "";
        top: 50%;
        left: var(--slider-offset);
        transform: translateY(-50%);
        background: linear-gradient(40deg, #454545, #bdbdbd 70%);
        transition: var(--transition-time);
      }
    }

    input {
      opacity: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      appearance: none;

      &:checked + .slider {
        background-color: var(--checked-slider-background);
      }

      //&:focus + .slider {
      //  box-shadow: 0 0 1rem orange;
      //}

      &:checked + .slider:before {
        left: calc(100% - (var(--size-of-icon) + var(--slider-offset)));
      }
    }
  }
}
</style>
