import Vue from 'vue'

const screenListener = {
  data: () => ({
    screenWidth: 0,
    scrollY: 0,
  }),

  computed: {
    isDesktop() {
      return this.screenWidth >= 1220
    },

    isTablet() {
      return this.screenWidth <= 992
    },

    isMobile() {
      return this.screenWidth <= 600
    },

    scrollYValue() {
      return this.scrollY
    },
  },

  mounted() {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      window.addEventListener('scroll', this.handleScroll)
      this.handleResize()
    }
  },

  destroyed() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleResize() {
      if (process.client) {
        this.screenWidth = window.innerWidth
      }
    },

    handleScroll() {
      if (process.client) {
        this.scrollY = window.scrollY
      }
    },
  },
}

Vue.mixin(screenListener)
