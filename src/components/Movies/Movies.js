import { Lightning, Utils } from '@lightningjs/sdk'

export default class Movies extends Lightning.Component {
  static getFonts() {
    return [{ family: 'DejaVu Sans', url: Utils.asset('fonts/DejaVuSans.ttf') }]
  }

  static _template() {
    return {
      Text: {
        x: 98,
        y: 785,
        text: {
          text: 'New Movie',
          fontSize: 39,
          fontFace: 'sans-serif',
          textColor: 0xffffffff,
        },
        Movies: {
          flex: { direction: 'row', justifyContent: 'space-between', wrap: false },
          Movie1: {
            flexItem: { marginLeft: 20 },
            y: 53,
            w: 277,
            h: 416,
            src: Utils.asset('../../static/images/movies/1.png'),
          },
          Movie2: {
            flexItem: { marginLeft: 20 },
            y: 53,
            w: 277,
            h: 416,
            src: Utils.asset('../../static/images/movies/2.png'),
          },
          Movie3: {
            flexItem: { marginLeft: 20 },
            y: 53,
            w: 277,
            h: 416,
            src: Utils.asset('../../static/images/movies/3.png'),
          },
          Movie4: {
            flexItem: { marginLeft: 20 },
            y: 53,
            w: 277,
            h: 416,
            src: Utils.asset('../../static/images/movies/4.png'),
          },
          Movie5: {
            flexItem: { marginLeft: 20 },
            y: 53,
            w: 277,
            h: 416,
            src: Utils.asset('../../static/images/movies/5.png'),
          },
          Movie6: {
            flexItem: { marginLeft: 20 },
            y: 53,
            w: 277,
            h: 416,
            src: Utils.asset('../../static/images/movies/6.png'),
          },
          Movie7: {
            flexItem: { marginLeft: 20 },
            y: 53,
            w: 277,
            h: 416,
            src: Utils.asset('../../static/images/movies/7.png'),
          },
        },
      },
    }
  }

  _init() {
    this.index = 1
    this._setState('Focus')
  }

  static _states() {
    return [
      class Focus extends this {
        _getFocused() {
          return this.tag('Movies')[this.index]
        }
        _handleLeft() {
          if (this.index > 0) {
            this.index--
          }
        }
        _handleRight() {
          // we don't know exactly how many items the list can have
          // so we test it based on this component's child list
          if (this.index < this.index + 1) {
            this.index++
          }
        }
      },
    ]
  }

  _focus() {
    this.color = 0xffffffff
    this.tag('Movies').children[this.index].color = 0xffff00ff
  }
  _unfocus() {
    this.color = 0xffffffff
    this.tag('Movies').children[this.index].color = 0xffffffff
  }
}
