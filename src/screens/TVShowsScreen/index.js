import BaseScreen from '../BaseScreen'

export default class TVShowsScreen extends BaseScreen {
  static _template() {
    return {
      Text: {
        y: 200,
        text: {
          fontSize: 50,
          fontFace: 'sans-serif',
          textColor: 0xffffffff,
          text: 'TVShowsScreen',
        },
      },
      Background: {
        rect: true,
        w: 900,
        h: 900,
        color: 0xff1f1f1f,
      },
      // alpha: 0.5,
    }
  }
}
