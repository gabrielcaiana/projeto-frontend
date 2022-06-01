<template>
  <p class="text-base text-dark" v-text="text"></p>
</template>

<script>
export default {
  name: 'AppSubtitle',

  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
