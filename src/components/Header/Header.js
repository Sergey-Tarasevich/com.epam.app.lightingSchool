import { Lightning, Utils } from '@lightningjs/sdk'
import HeaderItem from './HeaderItem'
// import NavigationItem from '../lib/NavigationItem'

const itemData = ['Home', 'Movies', 'TV', 'Sports']

export default class Header extends Lightning.Component {
  static _template() {
    return {
      Header: {
        flex: {
          direction: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          wrap: false,
        },
        rect: true,
        w: 1920,
        h: 144,
        color: 0xff0099f7,

        //Logo, ex. EPAM
        ShadowsLogo: {
          x: 20,
          y: 20,
          flexItem: { marginLeft: 55 },
          zIndex: 1,
          color: 0x66000000,
          texture: Lightning.Tools.getShadowRect(110, 60, 4, 10, 10),
          Logo: {
            w: 100,
            h: 50,
            src: Utils.asset('images/header/EPAM_logo.png'),
            zIndex: 2,
          },
        },

        //central block

        // Old solution
        // Home: {
        //   flexItem: { marginLeft: 500 },
        //   text: {
        //     text: 'HOME',
        //     fontSize: 36,
        //     fontFace: 'sans-serif',
        //     textColor: 0xffffffff,
        //   },
        // },
        // Movies: {
        //   flexItem: { marginLeft: 67 },
        //   text: {
        //     text: 'MOVIES',
        //     fontSize: 36,
        //     fontFace: 'sans-serif',
        //     textColor: 0xffffffff,
        //   },
        // },
        // Tv: {
        //   flexItem: { marginLeft: 58 },
        //   text: {
        //     text: 'TV',
        //     fontSize: 36,
        //     fontFace: 'sans-serif',
        //     textColor: 0xffffffff,
        //   },
        // },
        // Sports: {
        //   flexItem: { marginLeft: 64 },
        //   text: {
        //     text: 'SPORTS',
        //     fontSize: 36,
        //     fontFace: 'sans-serif',
        //     textColor: 0xffffffff,
        //   },
        // },

        CentralBlock: {
          flex: { direction: 'row', alignItems: 'center' },
        },

        //End block 'search and sign In'
        EndBlock: {
          flex: { direction: 'row', alignItems: 'flex-end' },
          Search: {
            w: 49,
            h: 50,
            flexItem: { marginLeft: 200 },
            src: Utils.asset('images/header/search.png'),
          },
          SignIn: {
            w: 168,
            h: 68,
            flexItem: { marginLeft: 45, marginRight: 75 },
            src: Utils.asset('images/header/img_signIn.png'),
            TextSignIn: {
              mountX: -0.35,
              mountY: -0.3,
              text: {
                text: 'Sign in',
                fontSize: 32,
                fontFace: 'sans-serif',
                textColor: 0xffffffff,
              },
            },
          },
        },
      },
    }
  }

  _init() {
    this.index = 0
    this._setState('Focus')
    this.tag('CentralBlock').children = itemData.map((item) => {
      return {
        type: HeaderItem,
        text: item.toUpperCase(),
        // route: item.toLowerCase(),
        // flexItem: { marginBottom: 30 },
      }
    })
  }

  static _states() {
    return [
      class Focus extends this {
        _getFocused() {
          return this.tag('CentralBlock').children[this.index]
        }
        _handleLeft() {
          if (this.index > 0) {
            this.index--
          }
        }
        _handleRight() {
          // we don't know exactly how many items the list can have
          // so we test it based on this component's child list
          if (this.index < this.tag('CentralBlock').children.length - 1) {
            this.index++
          }
        }
        reset() {
          this.index = 0
          this._refocus() // We need to force focus recalc.
        }
      },
    ]
  }
}
