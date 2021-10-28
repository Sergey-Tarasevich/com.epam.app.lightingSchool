import BaseScreen from '../BaseScreen'

export default class MoviesScreen extends BaseScreen {
  static _template() {
    return {
      Caption: {
        text: {
          fontSize: 50,
          fontFace: 'sans-serif',
          textColor: 0xffffffff,
          text: 'MoviesScreen',
        },
      },
      alpha: 0.5,
    }
  }
}
