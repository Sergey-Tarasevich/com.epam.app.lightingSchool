import { Lightning } from '@lightningjs/sdk'

export const ITEM_WIDTH = 350
const ITEM_HEIGHT = 200

export class ListItem extends Lightning.Component {
  static _template() {
    return {
      flex: { direction: 'column' },
      Image: {
        w: ITEM_WIDTH,
        h: ITEM_HEIGHT,
      },
      Title: {},
    }
  }

  _init() {
    this.patch({
      Image: {
        src: this.item.backdrop_path,
        alpha: 0.8,
      },
      Title: {
        text: {
          fontSize: 20,
          text: this.item.title,
          wordWrapWidth: ITEM_WIDTH,
          textAlign: 'center',
        },
      },
    })
  }

  _focus() {
    this.patch({ smooth: { scale: 1.1 } })
  }

  _unfocus() {
    this.patch({ smooth: { scale: 1 } })
  }
}
