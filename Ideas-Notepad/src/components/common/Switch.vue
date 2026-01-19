<template>
  <div class="switch">
    <label>{{ label }}</label>
    <label class="switch-body">
      <input type="checkbox"/>
      <span class="slider"></span>
    </label>
  </div>
</template>

<script setup lang="ts">

interface ISwitchProps {
  label?: string
}

const props = defineProps<ISwitchProps>()
</script>

<style scoped
       lang="scss">
.switch {
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  min-height: 10rem;
  gap: .5rem;

  .switch-body {
    --width-of-switch: 3.5rem;
    --height-of-switch: 1.9rem;
    --size-of-icon: 1.2rem;
    --slider-offset: .3rem;
    --slider-background: color-mix(in oklab, var(--main-background-color) 10%, white);
    --checked-slider-background: color-mix(in oklab, var(--slider-background) 20%, #08a508);

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
      transition: 0.4s;
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
        transition: 0.4s;
      }
    }

    input {
      opacity: 0;
      width: 0;
      height: 0;

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
