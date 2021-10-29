import { Lightning } from '@lightningjs/sdk'

export default class MoviesItem extends Lightning.Component {
  static _template() {
    return {
      Movie: {},
    }
  }
  set item(value) {
    this.tag('Movie').patch({
      src: value,
    })
    this.src = value
  }
  get item() {
    return this._src
  }
  _focus() {
    // this.color = 0xffffffff
    // this.tag('Movie').color = 0xffff00ff
    // this.tag('Movies').patch({
    //   smooth: { alpha: 1, scale: 1.08 },
    // })
    this.setSmooth('alpha', 1)
    this.setSmooth('scale', 1.08)
  }
  _unfocus() {
    // this.color = 0xffffffff
    // this.tag('Movie').color = 0xffffffff
    // this.tag('Movies').children[this.index].color = 0xffffffff
    // this.tag('Movie').patch({
    //   smooth: { alpha: 0.8, scale: 1 },
    // })
    this.setSmooth('alpha', 0.6)
    this.setSmooth('scale', 1)
  }
}
