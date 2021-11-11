import { Lightning, Utils } from '@lightningjs/sdk'

const SliderImgArray = [
  { img: '../../static/images/slider/Deadpool.png' },
  { img: '../../static/images/slider/Andorra.jpg' },
  { img: '../../static/images/slider/Lux.jpg' },
]

export default class Slider extends Lightning.Component {
  static getFonts() {
    return [{ family: 'DejaVu Sans', url: Utils.asset('fonts/DejaVuSans.ttf') }]
  }

  static _template() {
    return {
      zIndex: 2,
      SliderImage: {
        y: (h) => h + 144,
        w: 1920,
        h: 600,
        //
        flex: {
          direction: 'row',
          // justifyContent: 'space-between',
          wrap: false,
        },

        // Shadow: {
        //   // y: h => h - 300,
        //   w: (w) => w,
        //   h: (h) => h + 4,
        //   src: Utils.asset('../../static/images/slider/DeadpoolShadow.png'),
        // },

        // TextDeadpool: {
        //   x: 159,
        //   y: 436,
        //   text: {
        //     text: 'Deadpool',
        //     fontSize: 101,
        //     fontFace: 'sans-serif',
        //     fontStyle: 'bold',
        //     textColor: 0xffffffff,
        //   },
        // },

        // TextSmall: {
        //   x: 154,
        //   y: 553,
        //   text: {
        //     text:
        //       'Options can be contextual to the screen and/or the screen item in focus',
        //     fontSize: 27,
        //     fontFace: 'sans-serif',
        //     textColor: 0xffffffff,
        //   },
        // },
      },
      Buttons: {
        w: 75,
        h: 85,
        y: 400,
        flex: {
          direction: 'row',
          // justifyContent: 'space-between',
          wrap: false,
        },
        LeftButton: {
          flexItem: { marginLeft: 70 },
          src: Utils.asset('../../../static/images/slider/LeftButton.png'),
        },
        RightButton: {
          flexItem: { marginLeft: 1690 },
          src: Utils.asset('../../../static/images/slider/RightButton.png'),
        },
      },
    }
  }

  _init() {
    this.index = 0
    this._setState('Focus')
    this.tag('SliderImage').patch({
      src: SliderImgArray[0].img,
      // w: 1920,
      // h: 600,
    })
  }

  static _states() {
    return [
      class Focus extends this {
        _getFocused() {
          return this.tag('SliderImage').children[this.index]
        }

        _handleLeft() {
          if (this.index > 0) {
            this.index--
            this.tag('SliderImage').src = SliderImgArray[this.index].img
            this.tag('RightButton').color = 0xffffffff
            this.tag('LeftButton').color = 0xffff00ff
          } else if (this.index === 0) {
            this.index = SliderImgArray.length - 1
            this.tag('SliderImage').src = SliderImgArray[this.index].img
            this.tag('RightButton').color = 0xffffffff
            this.tag('LeftButton').color = 0xffff00ff
          }
          // if (this.index > 0) {
          //   this.index--
          // } else if ((this.index = this.tag('SliderImage').children[0])) {
          //   this.index = this.tag('SliderImage').children.length - 1
          // }
        }
        _handleRight() {
          if (this.index < SliderImgArray.length - 1) {
            this.index++
            this.tag('SliderImage').src = SliderImgArray[this.index].img
            this.tag('LeftButton').color = 0xffffffff
            this.tag('RightButton').color = 0xffff00ff
          } else if (this.index === SliderImgArray.length - 1) {
            this.index = 0
            this.tag('SliderImage').src = SliderImgArray[this.index].img
            this.tag('LeftButton').color = 0xffffffff
            this.tag('RightButton').color = 0xffff00ff
          }

          // if (this.index < this.tag('SliderImage').children.length - 1) {
          //   this.index++
          // } else if ((this.index = this.tag('SliderImage').children.length)) {
          //   this.index = 0
          // }
        }

        // reset() {
        //   this.index = 0
        //   this._refocus()
        // }
      },
    ]
  }
  _focus() {
    // this.tag('Text').setSmooth('color', '0xffff00ff')
    // this.setSmooth('scale', 1.05)
    this.tag('LeftButton').setSmooth('scale', 1.3)
    this.tag('RightButton').setSmooth('scale', 1.3)
    // this.tag('Buttons').patch({
    //   smooth: { scale: 1.2 },
    // })
  }
  _unfocus() {
    // this.color = 0xffffffff
    // this.tag('SliderImage').color = 0xffffffff
    this.tag('LeftButton').color = 0xffffffff
    this.tag('RightButton').color = 0xffffffff
    this.tag('RightButton').setSmooth('scale', 1)
    this.tag('LeftButton').setSmooth('scale', 1)
  }
  // slider block
  // _handleLeft() {
  //   if (this._index > 0) {
  //     this._index--
  //     this._currentTransition = this._transitions[this._index]
  //     this.changeSmoothing()
  //   }
  // }

  // _handleRight() {
  //   if (this._index < 6) {
  //     this._index++
  //     this._currentTransition = this._transitions[this._index]
  //     this.changeSmoothing()
  //   }
  // }

  // _init() {
  //   this._index = 0
  //   this._transitions = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']
  //   this._currentTransition = 'linear'
  // }
}
