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
  max-width: 1070px;
  @include screen('large', 'infinity') {
    width: 70%;
    background: red;
  }

  @include screen('medium') {
    width: 85%;
    background: blue;
  }

  @include screen('small') {
    width: 90%;
    background: green;
  }
}
</style>
