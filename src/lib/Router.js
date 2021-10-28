import { routings } from './RoutingMap'
let application = null
let stage = null
let host = null
let activeScreen = null
const screenCache = {}

/**
 * setup parameters
 * @param instance - {application instance}
 */
export const setupRouter = instance => {
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
export const navigate = route => {
  const routing = routings.find(r => r.url === route)
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
const createScreen = settings => {
  const component = stage.c(settings)
  host.a(component)
  return component
}
