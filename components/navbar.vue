<template>
  <nav class="navbar is-dark is-capitalized" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <h1 class="navbar-item is-size-5 has-text-weight-bold">
          {{ title }}
        </h1>
        <a
          :class="{'is-active': isActive}"
          @click="toggleMenu"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbar-menu" :class="{'is-active': isActive}" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link
            v-for="link in links"
            :key="link.name"
            :to="link.path"
            v-text="link.name"
            class="navbar-item"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'VNavbar',
  props: {
    title: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>
