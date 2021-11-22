import { Lightning, Utils, Router } from '@lightningjs/sdk'
import Header from '../Header/Header'
// import Player from './Player'

export default class MoviesInfo extends Lightning.Component {
  static getFonts() {
    return [{ family: 'DejaVu Sans', url: Utils.asset('fonts/DejaVuSans.ttf') }]
  }

  static _template() {
    return {
      zIndex: 2,
      Header: { type: Header },
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        //color black
        color: 0xff000000,

        Pictures: {
          w: 500,
          h: 400,
          y: 165,
          x: 20,
          src: Utils.asset('../../static/images/moviesInfo/Milano.png'),
          flex: {
            direction: 'row',
            justifyContent: 'flex-start',
            wrap: false,
          },
        },
        Description: {
          mountX: -1.3,
          mountY: -1.5,
          text: {
            text: 'Description of the film',
            shadow: true,
            shadowColor: 0xffff00ff,
            fontSize: 70,
            fontFace: 'sans-serif',
            textColor: 0xffffffff,
          },
          Info: {
            x: (x) => x - 980,
            y: (y) => y + 20,
            text: {
              text:
                ' The leopard (Panthera pardus) is one of the five extant species in the genus Panthera, a member of the cat family, Felidae. It occurs in a wide range in sub-Saharan Africa, in some parts of Western and Central Asia, Southern Russia, and on the Indian subcontinent to Southeast and East Asia. It is listed as Vulnerable on the IUCN Red List because leopard populations are threatened by habitat loss and fragmentation, and are declining in large parts of the global range.\n Attacks on people Main article Leopard attack The Leopard of Rudraprayag killed more than 125 people; the Panar Leopard was thought to have killed more than 400 people. Both were shot by Jim Corbett. The spotted devil of Gummalapur killed about 42 people in Karnataka, India',
              wordWrap: true,
              // textOverflow: 1,
              wordWrapWidth: 1300,
            },
          },
        },
        PlayButton: {
          x: 800,
          y: 870,
          // zIndex: 1,
          texture: lng.Tools.getRoundRect(
            280,
            80,
            30,
            8,
            0xf10011ff,
            true,
            0xff00ffff
          ),
          Text: {
            mountX: -0.5,
            mountY: -0.1,
            text: {
              text: 'PLAY',
              fontSize: 55,
              fontFace: 'sans-serif',
              fontStyle: 'bold',
              textColor: 0xffffffff,
              shadow: true,
              shadowColor: 0xff000000,
            },
          },
        },
      },
    }
  }

  static _states() {
    return [
      class Header extends this {
        _getFocused() {
          return this.tag('Header')
        }
      },
      class MoviesInfo extends this {
        _handleUp() {
          this._setState('Header')
        }
        //focus after EnterButton on PlayButton
        _getFocused() {
          return this.tag('PlayButton')
        }
      },
    ]
  }
  //if we want red color Home after EnterButton with movieInfo (but focus in first on PlayButton)

  // _getFocused() {
  //   return this.tag('Header')
  // }

  _onUrlParams({ entityId }) {
    console.log('MovieInfo catch Info')
  }

  _handleDown() {
    this._setState('PlayButton')
    this.tag('PlayButton').color = 0xffff00ff
    this.tag('PlayButton').setSmooth('scale', 1.28)
  }
  _handleUp() {
    this._setState('Header')
    this.tag('PlayButton').color = 0xffffffff
    this.tag('PlayButton').setSmooth('scale', 1)
  }

  _focus() {
    this.tag('PlayButton').color = 0xffff00ff
    this.tag('PlayButton').setSmooth('scale', 1.28)
  }
  _handleKey(key) {
    if (key.code === 'Backspace' || key.code === 'Delete') {
      Router.navigate('/home')
    }
  }
}
