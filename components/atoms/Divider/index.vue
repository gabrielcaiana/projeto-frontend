<template>
  <hr :class="['divider', vertical && 'divider--vertical']" />
</template>

<script>
export default {
  name: 'AppDivider',
}
</script>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.divider {
  display: block;
  flex: 1 1 100%;
  height: 0px;
  max-height: 0px;
  transition: inherit;
  border-color: rgba(0, 0, 0, 0.12);
  border-style: solid;
  border-width: thin 0 0 0;

  &--vertical {
    align-self: stretch;
    border-width: 0 thin 0 0;
    display: inline-flex;
    height: inherit;
    margin-left: -1px;
    max-height: 100%;
    max-width: 0px;
    vertical-align: text-bottom;
    width: 0px;
  }
}
</style>
