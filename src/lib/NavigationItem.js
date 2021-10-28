import { Lightning } from '@lightningjs/sdk'
import { navigate } from './Router'

export default class NavigationItem extends Lightning.Component {
  _handleEnter() {
    console.log('ENTER IS WORKING')
    if (this._route) {
      navigate(this._route)
    }
  }
}
