import { Launch } from '@lightningjs/sdk'
import App from './App.js'
// import { setupRouter } from './lib/Router'

export default function() {
  return Launch(App, ...arguments)
  // const app = Launch(App, ...arguments)
  // setupRouter(app)
  // return app
}
