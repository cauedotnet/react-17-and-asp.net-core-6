import './App.css';
import MoviesList from './movies/MoviesList'
import { landingPageDTO } from './movies/movies.model';
import { useEffect, useState } from 'react';

function App() {
  //create a useState based on the interface landingPageDTO (defined on movies/movies.model.d.ts)
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    //simulates an api fetch by setting a timeout to load the 'movies' variable (using 'setMovies')
    const timerId = setTimeout(() => {
      //set the movies variable with a object of type landingPageDTO
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster: 'https://m.media-amazon.com/images/I/51Ec5e2vz9L._AC_.jpg'
          },
          {
            id: 2,
            title: 'Luca',
            poster: 'https://br.web.img3.acsta.net/pictures/21/05/07/10/59/3500748.jpg'
          }
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Soul',
            poster: 'https://cinesiageek.com.br/wp-content/uploads/2020/12/soul-poster.jpg'
          },
          {
            id: 4,
            title: 'Mortal Kombat',
            poster: 'https://jovemnerd.com.br/wp-content/uploads/2021/04/imagem_2021-04-08_174913.png'
          }
        ]
      })
    }, 1000);

    return () => clearTimeout(timerId);
  });

  return (
    <div className="container">
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </div>
  )
}

export default App;
