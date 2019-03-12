<template>
  <div class="box">
    <div class="content">
      <div class="columns is-marginless">
        <div class="column is-narrow">
          <h1 class="title is-capitalized">
            {{ location.name }}
          </h1>
          <h6 class="subtitle is-capitalized">
            {{ location.country }}
          </h6>
          <p class="is-marginless is-size-1">
            {{ weather.temperature }}&#8457;
          </p>
          <p>{{ weather.summary }}</p>
        </div>
        <div class="column is-narrow">
          <v-icon :size="80" :name="iconMap[weather.icon]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LOCATIONS } from '~/content/locations.json'
import { MAP as iconMap } from '~/content/icon.json'
import { ROUTES } from '~/core/constants'
import { darkskyQuery } from '~/core/utils'

export default {
  data() {
    return {
      iconMap
    }
  },
  async asyncData({ $axios, route }) {
    const location = LOCATIONS.find(({ key }) => key === route.params.key)
    const { latitude, longitude } = location
    const { currently } = await $axios.$get(darkskyQuery(longitude, latitude))
    return { location, weather: currently }
  },
  validate({ route }) {
    return Boolean(ROUTES.includes(route.path))
  }
}
</script>
