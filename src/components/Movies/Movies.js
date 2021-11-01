import { Lightning, Utils } from '@lightningjs/sdk'
import MoviesItem from './MoviesItem'

const imgArray = [
  { img: '../../static/images/movies/1.png' },
  { img: '../../static/images/movies/2.png' },
  { img: '../../static/images/movies/3.png' },
  { img: '../../static/images/movies/4.png' },
  { img: '../../static/images/movies/5.png' },
  { img: '../../static/images/movies/6.png' },
  { img: '../../static/images/movies/7.png' },
]
export default class Movies extends Lightning.Component {
  static getFonts() {
    return [{ family: 'DejaVu Sans', url: Utils.asset('fonts/DejaVuSans.ttf') }]
  }

  static _template() {
    return {
      Text: {
        x: 30,
        y: 745,
        text: {
          text: 'New Movie',
          fontSize: 39,
          fontFace: 'sans-serif',
          textColor: 0xffffffff,
        },
        Movies: {
          y: 53,
          flex: {
            direction: 'row',
            justifyContent: 'space-between',
            wrap: false,
          },

          // Movie1: {
          //   // flexItem: { marginLeft: 23 },
          //   y: 53,
          //   w: 271,
          //   h: 410,
          //   src: Utils.asset('../../static/images/movies/1.png'),
          // },
          // Movie2: {
          //   flexItem: { marginLeft: 23 },
          //   y: 53,
          //   w: 277,
          //   h: 416,
          //   src: Utils.asset('../../static/images/movies/2.png'),
          // },
          // Movie3: {
          //   flexItem: { marginLeft: 23 },
          //   y: 53,
          //   w: 277,
          //   h: 416,
          //   src: Utils.asset('../../static/images/movies/3.png'),
          // },
          // Movie4: {
          //   flexItem: { marginLeft: 23 },
          //   y: 53,
          //   w: 277,
          //   h: 416,
          //   src: Utils.asset('../../static/images/movies/4.png'),
          // },
          // Movie5: {
          //   flexItem: { marginLeft: 23 },
          //   y: 53,
          //   w: 277,
          //   h: 416,
          //   src: Utils.asset('../../static/images/movies/5.png'),
          // },
          // Movie6: {
          //   flexItem: { marginLeft: 23 },
          //   y: 53,
          //   w: 277,
          //   h: 416,
          //   src: Utils.asset('../../static/images/movies/6.png'),
          // },
          // Movie7: {
          //   flexItem: { marginLeft: 23 },
          //   y: 53,
          //   w: 277,
          //   h: 416,
          //   src: Utils.asset('../../static/images/movies/7.png'),
          // },
        },
      },
    }
  }

  _init() {
    this.index = 0
    this._setState('Focus')
    this.tag('Movies').children = imgArray.map((imgArray) => {
      return {
        type: MoviesItem,
        src: imgArray.img,
        flexItem: { marginLeft: 23 },
        w: 260,
        h: 380,
      }
    })
  }

  static _states() {
    return [
      class Focus extends this {
        _getFocused() {
          return this.tag('Movies').children[this.index]
        }

        _handleLeft() {
          if (this.index > 0) {
            this.index--
          } else if ((this.index = this.tag('Movies').children[0])) {
            this.index = this.tag('Movies').children.length - 1
          }
        }
        _handleRight() {
          if (this.index < this.tag('Movies').children.length - 1) {
            this.index++
          } else if ((this.index = this.tag('Movies').children.length)) {
            this.index = 0
          }
        }

        reset() {
          this.index = 0
          this._refocus()
        }
      },
    ]
  }

  // _focus() {
  //   // this.color = 0xffffffff
  //   // this.tag('Movies').children[this.index].color = 0xffff00ff
  //   this.tag('Movies').children[this.index].patch({
  //     smooth: { alpha: 1, scale: 1.08 },
  //   })
  // }
  // _unfocus() {
  //   // this.color = 0xffffffff
  //   // this.tag('Movies').children[this.index].color = 0xffffffff
  //   this.tag('Movies').children[this.index].patch({
  //     smooth: { alpha: 0.8, scale: 1 },
  //   })
  // }
}
