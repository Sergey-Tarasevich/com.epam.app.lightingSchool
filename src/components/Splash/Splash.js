import { Lightning, Router, Utils } from '@lightningjs/sdk'
import settings from '../settings'

export default class Splash extends Lightning.Component {
  static _template() {
    return {
      Background: {
        // w: settings.w,
        // h: settings.h,
        w: 1920,
        h: 1080,
        src: Utils.asset('images/background.png'),
        transitions: {
          alpha: {
            duration: 1,
            timingFunction: 'cubic-bezier(0.20, 1.00, 0.80)',
          },
        },
        Spinner: {
          src: Utils.asset('images/load.png'),
          mountX: 0.5,
          x: settings.w / 2,
          y: settings.h / 2,
          alpha: 0.001,
          w: 50,
          h: 50,
          transitions: {
            alpha: { duration: 1, timingFunction: 'cubic-bezier(0.50, 1.50, 1.80)' },
          },
        },
        zIndex: 2,
      },
    }
  }

  _init() {
    setTimeout(() => {
      Router.navigate('main', true)
    }, 5000)
    this.tag('Spinner').on('txLoaded', () => {
      this.tag('Spinner').setSmooth('alpha', 1)
      this._spinnerAnimation.start()
    })

    this.application.on('booted', () => {
      Router.navigate('main', false)
    })

    this._spinnerAnimation = this.animation({
      duration: 1,
      repeat: -1,
      action: [
        {
          t: 'Spinner',
          p: 'rotation',
          sm: 0,
          v: function(t) {
            if (t < 0.125) {
              return 45 * (Math.PI / 180)
            } else if (t < 0.25) {
              return 90 * (Math.PI / 180)
            } else if (t < 0.375) {
              return 135 * (Math.PI / 180)
            } else if (t < 0.5) {
              return 180 * (Math.PI / 180)
            } else if (t < 0.625) {
              return 225 * (Math.PI / 180)
            } else if (t < 0.75) {
              return 270 * (Math.PI / 180)
            } else if (t < 0.875) {
              return 315 * (Math.PI / 180)
            } else if (t < 1) {
              return 360 * (Math.PI / 180)
            }
          },
        },
      ],
    })
  }

  _inactive() {
    this._spinnerAnimation.stop()
  }
}
