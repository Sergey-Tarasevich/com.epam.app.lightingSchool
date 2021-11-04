import BaseScreen from '../BaseScreen'
// import getJsonData from '../../lib/FetchingData'

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
      Background: {
        rect: true,
        w: 900,
        h: 900,
        color: 0xff1f1f1f,
      },
      // List: {
      //   type: List,
      // },
      alpha: 0.5,
    }
  }
  // async _build() {
  //   this.tag('List').items = await getJsonData()
  // }

  // _getFocused() {
  //   return this.tag('List')
  // }
}
