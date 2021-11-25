import { Lightning, Router } from '@lightningjs/sdk'
import { VideoPlayer } from '@lightningjs/sdk'

const videoUrl =
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
const myLoader = (url, videoEl, config) => {
  return new Promise((resolve) => {
    videoEl.setAttribute('src', url)
    videoEl.load()
    resolve()
  })
}

export class Video extends Lightning.Component {
  _init() {
    this.canPlay = false
    VideoPlayer.position(0, 0)
    VideoPlayer.size(1920, 1080)
    VideoPlayer.loader(myLoader)
  }

  _firstActive() {
    VideoPlayer.consumer(this)
  }

  _active() {
    VideoPlayer.open(videoUrl)
  }

  _inactive() {
    VideoPlayer.close()
  }

  $videoPlayerCanPlay() {
    this.canPlay = true
  }

  get currentlyPlayed() {
    return VideoPlayer.playing
  }

  _handleEnter() {
    console.log('HANDLE SPACE', this.currentlyPlayed)
    if (this.canPlay) {
      if (this.currentlyPlayed) {
        VideoPlayer.pause()
      } else {
        VideoPlayer.play()
      }
    }
  }

  _handleBack() {
    Router.navigate('/home')
  }
}
