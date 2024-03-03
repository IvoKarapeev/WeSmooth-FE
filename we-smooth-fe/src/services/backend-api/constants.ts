const BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL

export const BLUEPRINTS_URL = BACKEND_URL + '/blueprints'
export const BLUEPRINTS_EXECUTE_URL = BLUEPRINTS_URL + '/execute'
export const BLUEPRINTS_STATUSES_URL = BLUEPRINTS_URL + '/statuses'
