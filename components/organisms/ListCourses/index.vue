<template>
  <div>
    <div class="w-full flex flex-end">
      <Tabs active="id2" />
    </div>
    <div class="mt-3 flex items-center flex-wrap gap-1">
      <Card empty @click="showFilterCourse = !showFilterCourse" />
      <Card v-for="course in courses" :key="course.id">
        <div class="flex flex-col justify-center">
          <img
            height="40"
            :src="course.university.logo_url"
            :atl="course.university"
          />
          <p
            class="text-dark text-xl text-medium mt-2"
            v-text="course.university.name"
          ></p>
          <p
            class="text-primary-dark text-xl text-medium"
            v-text="course.course.name"
          ></p>
          <p
            class="text-dark text-xl text-bold"
            v-text="course.university.score"
          ></p>

          <Divider class="my-1" />

          <p
            class="text-dark text-medium text-base"
            v-text="`${course.course.kind} - ${course.course.shift}`"
          ></p>
          <p
            class="text-dark text-sm"
            v-text="`Início das aulas em: ${course.start_date}`"
          ></p>

          <Divider class="my-1" />

          <p class="text-dark text-medium mb-1">
            Mensalidade com a Quero Bolsa
          </p>
          <span v-text="`R$ ${course.full_price}`"></span>
          <p class="text-positive text-bold text-xl">
            R${{ course.price_with_discount
            }}<span class="text-dark text-base text-regular">/Mês</span>
          </p>

          <div class="flex justify-center gap w-full mt-1">
            <Button outlined label="Excluir" />
            <Button label="Ver Oferta" />
          </div>
        </div>
      </Card>
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
      courses: null,
    }
  },

  mounted() {
    const itens = JSON.parse(localStorage.getItem('quero-edu-courses'))
    this.courses = itens
  },
}
</script>
