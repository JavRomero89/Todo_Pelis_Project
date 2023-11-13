import React, { useEffect, useState } from 'react';

const Genre = ({ genre, setGenre, setPage, type, value, setValue }) => {
  const fetchGenre = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=ced816c83a36de6db0fb51255d2a4091&language=en-US`
      );
      
      const data = await response.json();
      setGenre(data.genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  // Agrega un género a la lista seleccionada y lo quita de la lista no seleccionada
const CategoryAdd = (selectedGenre) => {
  setValue([...value, selectedGenre]);
  setGenre(genre.filter((g) => g.id !== selectedGenre.id));
  setPage(1);
};

// Remueve un género de la lista seleccionada y lo agrega a la lista no seleccionada
const CategoryRemove = (removedGenre) => {
  setValue(value.filter((g) => g.id !== removedGenre.id));
  setGenre([...genre, removedGenre]);
  setPage(1);
};

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-12 d-flex flex-wrap">
            {value &&
              value.map((val) => {
                const { id, name } = val;
                return (
                  <div className="m-2" key={id}>
                    <button
                      className="bg-dark text-white px-4 py-2 text-center buttons"
                      onClick={() => CategoryRemove(val)}
                    >
                      {name}
                    </button>
                  </div>
                );
              })}

            {genre &&
              genre.map((gen) => {
                const { id, name } = gen;
                return (
                  <div className="m-2" key={id}>
                    <button
                      className="bg-dark text-white px-4 py-2 text-center button"
                      onClick={() => CategoryAdd(gen)}
                    >
                      {name}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Genre;
