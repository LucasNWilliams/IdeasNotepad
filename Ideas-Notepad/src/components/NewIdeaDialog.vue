<template>
  <Dialog v-model:visible="visible">
    <div>
      <input placeholder="test"/>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "@/components/common/Dialog.vue";

const visible = defineModel<boolean>('visible', {default: false})

</script>

<style scoped lang="scss">

</style>
