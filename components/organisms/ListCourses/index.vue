<template>
  <div>
    <div class="w-full flex flex-end">
      <Tabs active="id2" />
    </div>

    <div class="mt-3 flex items-center justify-center flex-wrap gap-1">
      <Card empty />
      <Card v-for="(i, index) in 4" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppListCourses',
}
</script>
