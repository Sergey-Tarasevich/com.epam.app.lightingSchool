export default async function getJsonData() {
  try {
    let response = await fetch(
      'http://api.themoviedb.org/3/movie/popular?api_key=4bc08ab955f501a524c27210af4c49f3'
    )
    let data = await response.json()
    let elements = []

    data.results.forEach(film => {
      elements.push({
        poster: 'https://image.tmdb.org/t/p/w500' + film.poster_path,
        backdrop_path: 'https://image.tmdb.org/t/p/w500' + film.backdrop_path,
        description: film.overview,
        title: film.title,
      })
    })

    return elements
  } catch (error) {
    alert(error)
  }
}
