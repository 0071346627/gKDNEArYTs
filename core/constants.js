import { LOCATIONS } from '~/content/locations.json'

export const ROUTES = LOCATIONS.map(({ key }) => `/weather/${key}`)

/* Secret key should be in ENV or config */
export const DARKSKY_KEY = '6c9c9d1a8baed73061c4f3e4261532e1'
export const DARKSKY_BASE = `darksky/forecast/${DARKSKY_KEY}`
