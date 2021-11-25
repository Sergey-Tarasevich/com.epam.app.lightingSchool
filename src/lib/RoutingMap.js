// import HomeScreen from '../screens/HomeScreen'
import MoviesScreen from '../screens/MoviesScreen'
// import TVShowsScreen from '../screens/TVShowsScreen'
import SportsScreen from '../screens/SportsScreen'
// import Header from '../components/Header/Header'
// import Slider from '../components/Slider/Slider'
import Movies from '../components/Movies/Movies'
// import { imgArray } from '../components/Movies/Movies'
import ScreenHome from '../ScreenHome'
import MoviesInfo from '../components/MoviesInfo/MoviesInfo'
import { Video } from '../components/Video/video.component'

export default {
  root: '/',
  routes: [
    { path: '/', component: ScreenHome },
    { path: '/home', component: ScreenHome },
    { path: '/movies', component: MoviesScreen },
    { path: `/tv`, component: MoviesInfo },
    { path: '/sport', component: SportsScreen },
    // { path: '/details/:entityId', component: MoviesInfo },
    { path: '/details/2', component: MoviesInfo },
    { path: '/video', component: Video },
  ],
}

// export const routingsUrl = [
//   {
//     url: 'home',
//     settings: {
//       type: HomeScreen,
//       ref: 'HomeScreen',
//       x: 68,
//       y: 150,
//       w: 1920 - 68 * 2,
//     },
//   },
//   {
//     url: 'movies',
//     settings: {
//       type: MoviesScreen,
//       ref: 'MoviesScreen',
//       x: 68,
//       y: 150,
//       w: 1920 - 68 * 2,
//     },
//   },
//   {
//     url: 'tv',
//     settings: {
//       type: TVShowsScreen,
//       ref: 'TVShowsScreen',
//       x: 68,
//       y: 150,
//       w: 1920 - 68 * 2,
//     },
//   },
//   {
//     url: 'sports',
//     settings: {
//       type: SportsScreen,
//       ref: 'SportsScreen',
//       x: 68,
//       y: 150,
//       w: 1920 - 68 * 2,
//     },
//   },
// ]
