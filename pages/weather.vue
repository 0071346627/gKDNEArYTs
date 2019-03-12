<template>
  <main class="container">
    <section class="section">
      <div class="columns">
        <div class="column is-narrow">
          <v-menu :links="locations" title="Location" />
        </div>
        <div class="column">
          <nuxt-child />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { LOCATIONS as locations } from '~/content/locations.json'

export default {
  data() {
    return {
      locations
    }
  },
  scrollToTop: true
}
</script>
