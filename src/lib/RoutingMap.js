import HomeScreen from '../screens/HomeScreen'
import MoviesScreen from '../screens/MoviesScreen'
import TVShowsScreen from '../screens/TVShowsScreen'
import SportsScreen from '../screens/SportsScreen'

export const routings = [
  {
    url: 'home',
    settings: {
      type: HomeScreen,
      ref: 'HomeScreen',
      x: 68,
      y: 150,
      w: 1920 - 68 * 2,
    },
  },
  {
    url: 'movies',
    settings: {
      type: MoviesScreen,
      ref: 'MoviesScreen',
      x: 68,
      y: 150,
      w: 1920 - 68 * 2,
    },
  },
  {
    url: 'shows',
    settings: {
      type: TVShowsScreen,
      ref: 'TVShowsScreen',
      x: 68,
      y: 150,
      w: 1920 - 68 * 2,
    },
  },
  {
    url: 'sports',
    settings: {
      type: SportsScreen,
      ref: 'SportsScreen',
      x: 68,
      y: 150,
      w: 1920 - 68 * 2,
    },
  },
]
