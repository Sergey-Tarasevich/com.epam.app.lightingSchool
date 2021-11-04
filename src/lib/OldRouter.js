// import { routingsUrl } from './RoutingMap'
let application = null
let stage = null
let host = null
let activeScreen = null
const screenCache = {}

export const routingsUrl = [
  {
    url: 'home',
    settings: {
      type: HomeScreen,
      ref: 'HomeScreen',
      x: 68,
      y: 150,
      w: 1920 - 68 * 2,
    },
  },
  {
    url: 'movies',
    settings: {
      type: MoviesScreen,
      ref: 'MoviesScreen',
      x: 68,
      y: 150,
      w: 1920 - 68 * 2,
    },
  },
  {
    url: 'tv',
    settings: {
      type: TVShowsScreen,
      ref: 'TVShowsScreen',
      x: 68,
      y: 150,
      w: 1920 - 68 * 2,
    },
  },
  {
    url: 'sports',
    settings: {
      type: SportsScreen,
      ref: 'SportsScreen',
      x: 68,
      y: 150,
      w: 1920 - 68 * 2,
    },
  },
]

/**
 * setup parameters
 * @param instance - {application instance}
 */
export const setupRouter = (instance) => {
  application = instance
  stage = application.stage
}
/**
 * current opened screen
 * @return activeScreen - {component}
 */
export const getActiveScreen = () => {
  return activeScreen
}
/**
 * navigate to screen
 * @param route - {string}
 */
export const navigate = (route) => {
  const routing = routingsUrl.find((r) => r.url === route)
  if (!host && application.childList.getByRef('App')) {
    const node = application.childList.getByRef('App')
    host = node.childList
  }
  if (!routing || (activeScreen && route === activeScreen.ref)) {
    return
  }
  if (activeScreen) {
    activeScreen.hide()
  }
  // eslint-disable-next-line no-prototype-builtins
  if (!screenCache.hasOwnProperty(routing.url)) {
    screenCache[routing.url] = createScreen(routing.settings)
  }
  activeScreen = screenCache[routing.url]
  activeScreen.show()
}
const createScreen = (settings) => {
  const component = stage.c(settings)
  host.a(component)
  return component
}
