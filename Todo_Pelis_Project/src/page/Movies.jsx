import React, { useState } from 'react';
import Genre from '../components/Genre';
import Card from '../components/Card';

const MoviesPage = () => {
  const [genre, setGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState([]);

  return (
    <div>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-12 text-center mt-2 mb-4 fs-1 fw-bold text-decoration-underline">
            Movies
          </div>
        </div>
      </div>

      <Genre
        genre={genre}
        setGenre={setGenre}
        setPage={setPage}
        type="movie"
        value={value}
        setValue={setValue}
      />

      <div className="container mt-3">
        <div className="row">
          {value.map((movie) => (
            <div key={movie.id} className="col-md-2 mb-3">
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
