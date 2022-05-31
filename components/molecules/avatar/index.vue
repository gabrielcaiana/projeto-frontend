<template>
  <div class="flex gap items-center cursor-pointer">
    <span
      class="text-primary-dark text-medium text-base"
      v-text="username"
    ></span>
    <Icon name="user" color="#007A8D" />
  </div>
</template>

<script>
export default {
  name: 'AppAvatar',

  props: {
    username: {
      type: String,
      required: true,
    },
  },
}
</script>
