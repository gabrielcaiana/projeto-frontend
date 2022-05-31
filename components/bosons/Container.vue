<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppContainer',
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1440px;
  @include screen('large', 'infinity') {
    width: 90%;
  }

  @include screen('medium') {
    width: 85%;
  }

  @include screen('small') {
    width: 90%;
  }
}
</style>
