import BaseScreen from '../BaseScreen'

export default class TVShowsScreen extends BaseScreen {
  static _template() {
    return {
      Text: {
        text: {
          fontSize: 50,
          fontFace: 'sans-serif',
          textColor: 0xffffffff,
          text: 'TVShowsScreen',
        },
      },
      alpha: 0.5,
    }
  }
}
