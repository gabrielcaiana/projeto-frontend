<template>
  <div class="flex items-center gap cursor-pointer">
    <slot />
    <div class="flex flex-col text-medium">
      <p v-text="title"></p>
      <span v-text="subtitle"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppContact',

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>
