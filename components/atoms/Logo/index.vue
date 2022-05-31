<template>
  <img
    class="cursor-pointer"
    src="~/assets/images/logo.svg"
    :width="size"
    :alt="alt"
    :title="title"
  />
</template>

<script>
export default {
  name: 'AppLogo',

  props: {
    size: {
      type: String,
      default: '120',
    },

    alt: {
      type: String,
      default: 'Logo Quero Educação',
    },

    title: {
      type: String,
      default: 'Logo Quero Educação',
    },
  },
}
</script>
