import { Lightning, Utils } from '@lightningjs/sdk'
// import { LightningElement } from 'lwc'

export default class Slider extends Lightning.Component {
  static getFonts() {
    return [{ family: 'DejaVu Sans', url: Utils.asset('fonts/DejaVuSans.ttf') }]
  }

  static _template() {
    return {
      ImageDeadpool: {
        y: h => h + 144,
        w: 1920,
        h: 638,
        src: Utils.asset('../../static/images/slider/Deadpool.png'),

        Shadow: {
          // y: h => h - 300,
          w: w => w,
          h: 640,
          src: Utils.asset('../../static/images/slider/DeadpoolShadow.png'),
        },

        TextDeadpool: {
          x: 159,
          y: 436,
          text: {
            text: 'Deadpool',
            fontSize: 101,
            fontFace: 'sans-serif',
            fontStyle: 'bold',
            textColor: 0xffffffff,
          },
        },

        TextSmall: {
          x: 154,
          y: 553,
          text: {
            text: 'Options can be contextual to the screen and/or the screen item in focus',
            fontSize: 27,
            fontFace: 'sans-serif',
            textColor: 0xffffffff,
          },
        },
      },
    }
  }
  _focus() {
    this.color = 0xffff0000
    this.tag('ImageDeadpool').color = 0xffff00ff
    // this.setSmooth('alpha', 1)
    // this.tag('Text').setSmooth('color', '0xffff00ff')
  }
  _unfocus() {
    this.color = 0xffffffff
    this.tag('ImageDeadpool').color = 0xffffffff
    // this.setSmooth('alpha', 0.5)
    // this.tag('Text').setSmooth('color', '0xffffffff')
  }
}

// <div class="slider">
// <div class="slider-line">
//     <img src="./images/elephant.png" alt="">
//     <img src="./images/gorilla.png" alt="">
//     <img src="./images/home.png" alt="">
//     <img src="./images/ice_cream.png" alt="">
// </div>
// </div>
// <button class="slider-prev">Prev</button>
// <button class="slider-next">Next</button>

// let offset = 0;
// const sliderLine = document.querySelector('.slider-line');

// document.querySelector('.slider-next').addEventListener('click', function(){
//     offset = offset + 256;
//     if (offset > 768) {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

// document.querySelector('.slider-prev').addEventListener('click', function () {
//     offset = offset - 256;
//     if (offset < 0) {
//         offset = 768;
//     }
//     sliderLine.style.left = -offset + 'px';
// })
