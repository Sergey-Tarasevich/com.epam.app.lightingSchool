import { Lightning, Utils, Router } from '@lightningjs/sdk'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Movies from './components/Movies/Movies'
import MoviesInfo from './components/MoviesInfo/MoviesInfo'
// import { getActiveScreen, navigate } from './lib/Router'
import routings from './lib/RoutingMap'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'DejaVu Sans', url: Utils.asset('fonts/DejaVuSans.ttf') }]
  }

  _setup() {
    Router.startRouter(routings, this)
  }

  static _template() {
    return {
      zIndex: 0,
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        //color black
        color: 0xff000000,
        // src: Utils.asset('../static/images/background.png'),
      },
      // Header: { type: Header },
      // Slider: { type: Slider },
      // Movies: { type: Movies },
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
    Router.navigate('/home')
  }

  static _template() {
    return {
      ...super._template(),
    }
  }
  /**
   * An example of extending the Router.App StateMachine
   */
  static _states() {
    const states = super._states()
    states.push(
      class ExampleState extends this {
        $enter() {}
        $exit() {}
      }
    )
    return states
  }

  _handleAppClose() {
    this.application.closeApp()
  }
}
