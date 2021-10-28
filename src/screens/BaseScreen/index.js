import { Lightning } from '@lightningjs/sdk'

export default class BaseScreen extends Lightning.Component {
  show() {
    this.visible = true
  }
  hide() {
    this.visible = false
  }
}
