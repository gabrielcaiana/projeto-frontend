<template>
  <div>
    <div class="w-full flex flex-end">
      <Tabs active="id2" />
    </div>
    <div class="mt-3 flex items-center flex-wrap gap-1">
      <Card empty @click="showFilterCourse = !showFilterCourse" />
    </div>
    <FilterCourse :show="showFilterCourse" @close="showFilterCourse = false" />
  </div>
</template>

<script>
export default {
  name: 'AppListCourses',
  data() {
    return {
      showFilterCourse: false,
    }
  },
}
</script>
