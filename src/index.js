import { Launch } from '@lightningjs/sdk'
import App from './App.js'
import { setupRouter } from './lib/Router'
// import Splash from './Splash'

export default function() {
  const app = Launch(App, ...arguments)
  setupRouter(app)
  return app
}
