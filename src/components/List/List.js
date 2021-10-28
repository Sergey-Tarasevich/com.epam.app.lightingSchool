import { Lightning } from '@lightningjs/sdk'
import { ListItem, ITEM_WIDTH } from './ListItem'

const ITEM_GAP = 100

export default class List extends Lightning.Component {
  static _template() {
    return {
      flex: { direction: 'column' },
      Text: {
        text: { fontSize: 24, text: 'RowList' },
      },
      Items: {
        y: 50,
      },
    }
  }

  _init() {
    this.index = 0
    this.position = 0
  }

  set items(data) {
    this.tag('Items').children = data.map((item, index) => ({
      type: ListItem,
      flexItem: { margingLeft: ITEM_GAP },
      item,
    }))

    this._items = this.tag('Items').children
  }

  _getFocused() {
    return this._items[this.index]
  }

  _handleLeft() {
    if (this.index < 3) {
      this.tag('Items').setSmooth('x', 0)
    } else if (this.index >= 3) {
      this.index--
      this.tag('Items').setSmooth('x', this.tag('Items').x + ITEM_WIDTH + ITEM_GAP)
    }
  }

  _handleRight() {
    if (this.index < this._items.length - 1) {
      this.index++
      this.tag('Items').setSmooth('x', -this.index * ITEM_WIDTH - ITEM_GAP)
    }
  }
}
