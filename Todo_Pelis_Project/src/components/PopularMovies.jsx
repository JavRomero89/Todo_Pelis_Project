import React, { useState } from 'react';

const PopularMovies = ({ movies }) => {
  const [showPopular, setShowPopular] = useState(false);
  const initialMoviesToShow = 6; // Número inicial de películas a mostrar
  const additionalMoviesToShow = 30; // Número adicional de películas a mostrar al hacer clic en "Mostrar populares"
  const [moviesToShow, setMoviesToShow] = useState(initialMoviesToShow);

  const toggleShowPopular = () => {
    if (showPopular) {
      setMoviesToShow(initialMoviesToShow); // Mostrar las primeras 6 películas nuevamente
    } else {
      setMoviesToShow(initialMoviesToShow + additionalMoviesToShow); // Mostrar 30 películas en total
    }
    setShowPopular(!showPopular);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {movies.slice(0, moviesToShow).map((movie) => (
          <div key={movie.id} className="col-md-2 mb-3" onClick={() => selectMovie(movie)}>
            <img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={600} width="60%" />
            <h3 className="">{movie.title}</h3>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button onClick={toggleShowPopular}>
          {showPopular ? 'Mostrar menos' : 'Mostrar populares'}
        </button>
      </div>
    </div>
  );
};

export default PopularMovies;
