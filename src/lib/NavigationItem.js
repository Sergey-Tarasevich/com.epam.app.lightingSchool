import { Lightning, Router } from '@lightningjs/sdk'
// import { navigate } from './Router'

export default class NavigationItem extends Lightning.Component {
  _handleEnter() {
    console.log(`ENTER IS WORKING ${this.route}`)
    if (this.route) {
      Router.navigate(this.route)
    }
  }
}
