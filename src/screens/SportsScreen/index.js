import BaseScreen from '../BaseScreen'

export default class SportsScreen extends BaseScreen {
  static _template() {
    return {
      Text: {
        text: {
          fontSize: 50,
          fontFace: 'sans-serif',
          textColor: 0xffffffff,
          text: 'SportsScreen',
        },
      },
      alpha: 0.5,
    }
  }
}
