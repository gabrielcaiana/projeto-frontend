<template>
  <div class="flex gap items-center cursor-pointer">
    <span class="text-medium text-sm" v-text="username"></span>
    <Icon name="user" size="20" :color="iconColor" />
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

    iconColor: {
      type: String,
      default: '#007A8D',
    },
  },
}
</script>
