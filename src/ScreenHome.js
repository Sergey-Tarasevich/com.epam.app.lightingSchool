import { Lightning, Utils } from '@lightningjs/sdk'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Movies from './components/Movies/Movies'

export default class ScreenHome extends Lightning.Component {
  static getFonts() {
    return [{ family: 'DejaVu Sans', url: Utils.asset('fonts/DejaVuSans.ttf') }]
  }

  static _template() {
    return {
      zIndex: 2,
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        //color black
        color: 0xff000000,
      },
      Header: { type: Header },
      Slider: { type: Slider },
      Movies: { type: Movies },
    }
  }

  static _states() {
    return [
      class Header extends this {
        _getFocused() {
          return this.tag('Header')
        }
      },
      class Slider extends this {
        _handleDown() {
          this._setState('Movies')
        }
        _handleUp() {
          this._setState('Header')
        }
        _getFocused() {
          return this.tag('Slider')
        }
      },
      class Movies extends this {
        _handleUp() {
          this._setState('Slider')
        }
        _getFocused() {
          return this.tag('Movies')
        }
      },
      // class MoviesInfo extends this {
      //   _getFocused() {
      //     return this.tag('MoviesInfo')
      //   }
      // },
    ]
  }
  _getFocused() {
    return this.tag('Header')
  }
  _handleDown() {
    this._setState('Slider')
  }
  _handleUp() {
    this._setState('Header')
  }
}
