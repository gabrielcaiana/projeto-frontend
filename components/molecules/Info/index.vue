<template>
  <div
    :class="[
      'text-primary-dark flex items-center gap cursor-pointer text-base text-medium',
      isMobile && 'flex flex-col',
    ]"
  >
    <Icon name="info" color="#007a8d" />
    <span v-if="isMobile">Ajuda</span>
    <span v-else>Como funciona</span>
  </div>
</template>

<script>
export default {
  name: 'AppInfo',
}
</script>
