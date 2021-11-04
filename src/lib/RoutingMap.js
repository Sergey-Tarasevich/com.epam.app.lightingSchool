import HomeScreen from '../screens/HomeScreen'
import MoviesScreen from '../screens/MoviesScreen'
import TVShowsScreen from '../screens/TVShowsScreen'
import SportsScreen from '../screens/SportsScreen'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import MoviesInfo from '../components/MoviesInfo/MoviesInfo'

export default {
  root: '/',
  routes: [
    { path: '/', component: Header },
    { path: '/home', component: Header, component: Slider },
    { path: '/movies', component: Slider },
    { path: '/tv', component: MoviesInfo },
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
