<template>
  <div>
    <v-navbar :title="title" :links="links" />
    <nuxt />
  </div>
</template>

<script>
import { LINKS as links, TITLE as title } from '~/content/navbar.json'

export default {
  data() {
    return {
      links,
      title
    }
  },
  middleware: 'weather'
}
</script>
