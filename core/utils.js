import { DARKSKY_BASE } from '~/core/constants'

export const darksky = (longitude, latitude) =>
  `/${DARKSKY_BASE}/${longitude},${latitude}`
