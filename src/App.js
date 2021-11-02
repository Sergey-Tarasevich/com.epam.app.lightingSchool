import { Lightning, Utils, Router } from '@lightningjs/sdk'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Movies from './components/Movies/Movies'
import MoviesInfo from './components/Movies/MoviesInfo'
import { getActiveScreen, navigate } from './lib/Router'
import { routings } from './lib/RoutingMap'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'DejaVu Sans', url: Utils.asset('fonts/DejaVuSans.ttf') }]
  }

  _setup() {
    Router.startRouter(routings, this)
  }

  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        //color black
        color: 0xff000000,
        // src: Utils.asset('../static/images/background.png'),
      },
      Header: { type: Header },
      Slider: { type: Slider },
      Movies: { type: Movies },
      // MoviesInfo: { type: MoviesInfo },

      // RectangleWithColor: {
      //   rect: true,
      //   alpha: 0.8,
      // x: 200,
      // y: 100,
      //   x: x => x + 100,
      //   y: h => h + 80,
      //   w: 400,
      //   h: 200,
      // color blue
      //   color: 0xff1c27bc,
    }
  }

  _init() {
    // this.tag('Background')
    //   .animation({
    //     duration: 15,
    //     repeat: -1,
    //     actions: [
    //       {
    //         t: '',
    //         p: 'color',
    //         v: { 0: { v: 0xfffbb03b }, 0.5: { v: 0xfff46730 }, 0.8: { v: 0xfffbb03b } },
    //       },
    //     ],
    //   })
    //   .start()
    navigate('home')
    // this._setState('HeaderState')
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
      class MoviesInfo extends this {
        _getFocused() {
          return this.tag('MoviesInfo')
        }
      },
      class Screen extends this {
        _getFocused() {
          return getActiveScreen()
        }
      },
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
  _handleKey(key) {
    if (key.code === 'Backspace') {
      const activeScreen = getActiveScreen()
      if (!activeScreen || activeScreen.ref === 'HomeScreen') {
        return false
      } else {
        navigate('home')
        return true
      }
    }

    // if (key.code === 'ArrowDown') {
    //   this._setState('Slider')

    //   return true
    // }
    // else if (key.code === 'ArrowDown' && this.tag('Slider')) {
    //   this._setState('Movies')

    //   return true
    // }

    // if (key.code === 'ArrowUp') {
    //   this._setState('Header')

    //   return true
    // }

    return false
  }
}
