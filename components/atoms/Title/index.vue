<template>
  <h1 class="text-2xl text-bold text-dark" v-text="text"></h1>
</template>

<script>
export default {
  name: 'AppTitle',

  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
