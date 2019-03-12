import { DARKSKY_BASE } from '~/core/constants'

export const darkskyQuery = (longitude, latitude) =>
  `/${DARKSKY_BASE}/${longitude},${latitude}`
