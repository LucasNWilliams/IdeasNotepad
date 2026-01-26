<template>
  <button v-if="iconOnly && icon != null"
          class="button-icon-only"
          @click="onClick">
    <slot>
        <FontAwesomeIcon :icon="icon"
                         :size="iconSize"
                         :inverse
                         class="font-awesome-icon"/>
    </slot>
  </button>

  <button v-else
          class="button-body"
          @click="onClick">
    <template v-if="icon != null">
      <FontAwesomeIcon :icon="icon"
                       :size="iconSize"
                       :inverse/>
    </template>
    <slot>
      <template v-if="label != null">
        {{ label }}
      </template>
    </slot>
  </button>
</template>

<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {FALibraryIcons} from "@/font-awesome-icons";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

type iconSizes = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x"

interface IButtonProps {
  label?: string
  icon?: typeof FALibraryIcons | IconDefinition
  iconOnly?: boolean
  iconSize?: iconSizes
  inverse?: boolean
}

const props = withDefaults(defineProps<IButtonProps>(), {
  iconOnly: false,
  iconSize: '1x',
  inverse: false
})
const emit = defineEmits(['click'])

const onClick = (e: Event) => {
  emit('click', e)
}

</script>

<style scoped lang="scss">
.font-awesome-icon {
  color: #efefef;
}

.button-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
  padding: .5rem .75rem;
  margin: .75rem .5rem;
  cursor: pointer;
  background: #ffffff;
  border-radius: .5rem;
  box-shadow: var(--default-shadow-color) 4px 4px;

  &:hover {
    background: #d8d8d8;
    transition: .3s;
  }
}

.button-icon-only {

  background-color: transparent;
  border-color:transparent;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  padding-inline-start: 0;
  padding-inline-end: 0;

  &:hover {
    background: rgba(30, 30, 30, 0.7);
    transition: .4s;
  }

}
</style>
