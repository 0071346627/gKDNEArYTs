<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <component :is="name" :width="size" :height="size" :alt="name" :fill="greyDarker" />
</template>

<script>
/* eslint-disable vue/no-unused-components */
import sun from '@fortawesome/fontawesome-free/svgs/solid/sun.svg'
import moon from '@fortawesome/fontawesome-free/svgs/solid/moon.svg'
import tint from '@fortawesome/fontawesome-free/svgs/solid/tint.svg'
import snowflake from '@fortawesome/fontawesome-free/svgs/solid/snowflake.svg'
import cloudShowersHeavy from '@fortawesome/fontawesome-free/svgs/solid/cloud-showers-heavy.svg'
import wind from '@fortawesome/fontawesome-free/svgs/solid/wind.svg'
import cloud from '@fortawesome/fontawesome-free/svgs/solid/cloud.svg'
import cloudSun from '@fortawesome/fontawesome-free/svgs/solid/cloud-sun.svg'
import cloudMoon from '@fortawesome/fontawesome-free/svgs/solid/cloud-moon.svg'
import { greyDarker } from '~/assets/index.scss'

export default {
  name: 'VIcon',
  components: {
    sun,
    moon,
    tint,
    snowflake,
    cloudShowersHeavy,
    wind,
    cloud,
    cloudSun,
    cloudMoon
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      greyDarker
    }
  }
}
</script>
