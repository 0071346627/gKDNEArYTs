<template>
  <aside class="menu is-capitalized">
    <p class="menu-label has-text-black">
      {{ title }}
    </p>
    <ul class="menu-list">
      <li v-for="link in links" :key="link.path">
        <nuxt-link :to="link.path" v-text="link.name" />
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'VMenu',
  props: {
    title: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>
