<template>
  <button v-if="iconOnly && icon != null"
          class="button-icon-only"
          :disabled
          @click="onClick">
    <slot>
        <FontAwesomeIcon :icon="icon"
                         :size="iconSize"
                         :inverse
                         class="font-awesome-icon-button"/>
    </slot>
  </button>

  <button v-else
          class="button-body"
          :class="styles"
          :disabled
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
import {computed} from "vue";
import {ButtonSeverity} from "@/components/common/enums";

type iconSizes = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x"

interface IButtonProps {
  label?: string
  icon?: typeof FALibraryIcons | IconDefinition
  iconOnly?: boolean
  iconSize?: iconSizes
  disabled?: boolean
  inverse?: boolean
  secondary?: boolean
  warning?: boolean
  danger?: boolean
  success?: boolean
  info?: boolean
}

const props = withDefaults(defineProps<IButtonProps>(), {
  iconOnly: false,
  iconSize: '1x',
  inverse: false,
  secondary: false,
  warning: false,
  danger: false,
  success: false,
  info: false
})
const emit = defineEmits(['click'])

const severity = computed(() => {
  let severity = undefined;
  if (props.secondary) {
    severity = ButtonSeverity.Secondary
  } else if (props.warning) {
    severity = ButtonSeverity.Warning
  } else if (props.danger) {
    severity = ButtonSeverity.Danger
  } else if (props.success) {
    severity = ButtonSeverity.Success
  } else if (props.info) {
    severity = ButtonSeverity.Info
  }

  return severity
})

const styles = computed(() => {
  return `${props.disabled ? 'disabled ' : ''}${severity.value}`
})

const onClick = (e: Event) => {
  emit('click', e)
}

</script>

<style lang="scss">
.font-awesome-icon-button {
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

  &:active {
    background: #8c8c8c;
    transition: .3s;
  }

  &:focus {
    background: #d8d8d8;
    transition: .3s;
    border-color: #3c3c3c;
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
  cursor: pointer;

  &:hover {
    background: rgba(30, 30, 30, 0.7);
    transition: .4s;
  }

}

.secondary {
  background: #8c8c8c;
}

.warning {
  background: #fff220;
}

.danger {
  background: #e62520;
}

.success {
  background: #3dd830;
}

.info {
  background: #068ae8;
}

.disabled {
  opacity: .6;
  cursor: not-allowed;
}

</style>
