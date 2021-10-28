// import { Lightning } from '@lightningjs/sdk'
import NavigationItem from '../../lib/NavigationItem'

export default class HeaderItem extends NavigationItem {
  static _template() {
    return {
      flexItem: { marginLeft: 100, alpha: 0.5 },
      Text: {},
    }
  }
  set item(value) {
    this.tag('Text').patch({
      text: value,
      fontSize: 36,
      fontFace: 'sans-serif',
      textColor: 0xffffffff,
      textAlign: 'center',
      // route: this.tag('Text').toLowerCase(),
      // route: value.toLowerCase(),
    })
    this._text = value
    this._route = value.route.toLowerCase()
  }
  get item() {
    return this._text
  }
  _focus() {
    this.color = 0xffff0000
    this.tag('Text').color = 0xff1f1f1f
    // this.setSmooth('alpha', 1)
    // this.tag('Text').setSmooth('color', '0xffff00ff')
  }
  _unfocus() {
    this.color = 0xffffffff
    this.tag('Text').color = 0xffffffff
    // this.setSmooth('alpha', 0.5)
    // this.tag('Text').setSmooth('color', '0xffffffff')
  }
}
