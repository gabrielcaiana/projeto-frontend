<template>
  <div class="flex gap">
    <Divider v-if="isMobile" vertical />
    <div
      :class="[
        'flex items-center cursor-pointer',
        isMobile ? 'flex-col flex-col-reverse gap-0' : 'gap',
      ]"
    >
      <span
        class="text-medium text-base"
        v-text="!isMobile ? username : 'Conta'"
      ></span>
      <Icon name="user" size="20" :color="iconColor" />
    </div>
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
