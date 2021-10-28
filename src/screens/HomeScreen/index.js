import BaseScreen from '../BaseScreen'

export default class HomeScreen extends BaseScreen {
  static _template() {
    return {
      Text: {
        text: {
          fontSize: 50,
          fontFace: 'sans-serif',
          textColor: 0xffffffff,
          text: 'HomeScreen',
        },
      },
      alpha: 0.5,
    }
  }
}
