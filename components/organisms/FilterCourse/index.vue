<template>
  <Modal :show="show" title="Adicionar bolsa" @close="$emit('close')">
    <Subtitle class="mt-1" text="Filtre e adicione as bolsas de seu intersse" />

    <div class="pt-2 pb-2">
      <div
        :class="[
          'mb-2 gap-1',
          isDesktop ? 'flex items-center' : 'flex flex-col',
        ]"
      >
        <InputSelect
          v-model="filters.city"
          :options="campus"
          label="Selecione sua cidade"
          placeholder="Selecione sua cidade"
        />
        <InputSelect
          v-model="filters.course"
          label="Selecione o curso de sua preferência"
          placeholder="Selecione o curso de sua preferência"
          :options="courses"
        />
      </div>

      <div :class="[isDesktop ? 'flex' : 'flex flex-col']">
        <div class="w-full">
          <p class="text-medium mb-2">COMO VOCÊ QUER ESTUDAR?</p>
          <div :class="['flex gap-2', !isDesktop && 'mb-2']">
            <Checkbox
              v-model="filters.kind.presencial"
              label="Presencial"
              @input="selectedKind('Presencial')"
            />
            <Checkbox
              v-model="filters.kind.ead"
              label="A distância"
              @input="selectedKind('EaD')"
            />
          </div>
        </div>

        <div :class="['w-full', isDesktop && 'ml-1']">
          <p class="text-medium">ATÉ QUANTO PODE PAGAR?</p>
          <span v-text="`R$${filters.price}`"></span>
          <Slider
            v-model="filters.price"
            :align-unity-left="false"
            label="teste"
            min="0"
            max="10000"
            step="0.1"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-between w-full text-medium">
      <span>Resultado:</span>
      <div class="flex gap">
        <span>Ordernar por:</span>
        <div class="flex" @click="orderCourses = !orderCourses">
          <b class="text-medium text-primary cursor-pointer"
            >Nome da faculdade</b
          >
          <Icon
            :style="
              orderCourses && 'transform: rotate(180deg); transition: 0.5s'
            "
            class="cursor-pointer"
            name="chevron-down"
            color="#18acc4"
          />
        </div>
      </div>
    </div>

    <form class="list">
      <ul v-if="showEmptyState" class="list__table">
        <li
          v-for="(item, index) in itemsFilters"
          :key="index"
          class="list__table__item"
        >
          <Checkbox
            v-model="item.td"
            class="flex items-center"
            @input="selectCourse(item)"
          />
          <div class="flex flex-col justify-center">
            <img :src="item.university.logo_url" :alt="item.course.name" />
          </div>
          <div class="flex flex-col justify-center">
            <p
              class="text-medium text-primary-dark"
              v-text="item.course.name"
            ></p>
            <span v-text="item.course.level"></span>
          </div>

          <div class="flex flex-col items-end justify-center">
            <p>
              Bolsa de
              <span
                class="text-positive text-medium"
                v-text="`${item.discount_percentage}%`"
              ></span>
            </p>
            <span
              class="text-positive text-medium"
              v-text="`R$${item.price_with_discount.toFixed(0)}/mês`"
            ></span>
          </div>
        </li>
      </ul>

      <p v-else class="text-base text-dark text-center p-3">
        Utilize os filtros acima para encontra o curso desejado!
      </p>
    </form>
    <div class="flex w-full flex-end gap">
      <Button outlined label="Cancelar" />
      <Button
        :disabled="!isDisabled"
        label="Adicionar bolsa(s)"
        @click="saveCourse"
      />
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'AppFilterCourse',

  props: {
    show: {
      type: Boolean,
      defaul: false,
    },
  },

  data() {
    return {
      campus: ['', 'São Paulo', 'São José dos Campos', 'Fortaleza', 'Jacareí'],
      courses: [
        '',
        'Arquitetura e Urbanismo',
        'Biomedicina',
        'Jornalismo',
        'Engenharia Mecânica',
        'Propaganda e Marketing',
        'Marketing',
        'Ciência da Computação',
        'Gastronomia',
        'Jogos Digitais',
        'Sistemas de Informação',
        'Ciências Econômicas',
        'Gestão de Recursos Humanos',
        'Farmácia',
        'Administração',
        'História',
        'Educação Física',
      ],
      filters: {
        course: '',
        city: '',
        kind: {
          presencial: false,
          ead: false,
          type: [],
        },
        price: 0,
      },
      coursesSelected: [],
      orderCourses: false,
      items: null,
      itemsFilters: null,
    }
  },

  computed: {
    showEmptyState() {
      return !!this.itemsFilters?.length
    },

    isDisabled() {
      return this.coursesSelected?.length && this.itemsFilters?.length
    },
  },

  watch: {
    show: {
      immediate: true,
      async handler(current, old) {
        if (current !== old) {
          const data = await this.$dataApi.get()
          this.items = data
        }
      },
    },
    filters: {
      handler(current) {
        if (current) {
          if (this.items?.length) {
            const itemsFilter = this.items.filter((item) => {
              if (
                current.city === item.campus.city &&
                current.course === item.course.name &&
                current.kind.type.find((i) => i === item.course.kind) &&
                item.full_price < current.price
              ) {
                return item
              }

              return null
            })

            this.itemsFilters = itemsFilter
          }
        }
      },
      deep: true,
    },
  },

  methods: {
    saveCourse() {
      console.log(this.coursesSelected)

      this.filters = {
        course: '',
        city: '',
        kind: {
          presencial: false,
          ead: false,
        },
        price: 0,
      }

      this.$emit('close')
    },

    selectCourse(item) {
      const index = this.coursesSelected.findIndex((i) => i.id === item.id)
      index >= 0
        ? this.coursesSelected.splice(index, 1)
        : this.coursesSelected.push(item)
    },

    selectedKind(item) {
      const index = this.filters.kind.type.findIndex((i) => i === item)
      index >= 0
        ? this.filters.kind.type.splice(index, 1)
        : this.filters.kind.type.push(item)
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  &__table {
    margin-top: 2rem;
    &__item {
      display: grid;
      grid-template-columns: 42px repeat(3, 1fr);
      margin-bottom: 2rem;
      padding: 1rem;
      border-top: 2px solid #efefef;
      border-bottom: 2px solid #efefef;

      img {
        height: 36px;
        width: 120px;
        object-fit: contain;
      }
    }
  }
}
</style>
