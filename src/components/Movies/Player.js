import { Lightning, VideoPlayer } from '@lightningjs/sdk'
// import Loader from './Loader.js'

export default class Player extends Lightning.Component {
  static _template() {
    return {
      VideoPlayer: { type: VideoPlayer },
      // Loader: { type: Loader },
    }
  }

  _firstActive() {
    this.tag('VideoPlayer').start()
    this.tag('VideoPlayer').consumer(this)
    this.tag('VideoPlayer').updateSettings({ consumer: this })
    this.tag('VideoPlayer').open(
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    )
  }

  $mediaplayerPlaying() {
    this.tag('VideoPlayer').stop()
  }
}
const events = [
  'timeupdate',
  'error',
  'ended',
  'loadeddata',
  'canplay',
  'play',
  'playing',
  'pause',
  'loadstart',
  'seeking',
  'seeked',
  'encrypted',
]

// consumer[`$mediaplayer${play}`]()
