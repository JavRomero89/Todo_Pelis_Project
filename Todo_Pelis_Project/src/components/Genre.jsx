import React from 'react';

const Genre = ({ genres, selectedGenres, setSelectedGenres }) => {
    if (!genres) {
      return null; // o algún mensaje de carga, dependiendo de tus necesidades
    }
  const toggleGenre = (genre) => {
    // Verificar si el género ya está seleccionado
    const isSelected = selectedGenres.some((selectedGenre) => selectedGenre.id === genre.id);

    if (isSelected) {
      // Si está seleccionado, quitar todos los géneros seleccionados
      setSelectedGenres([]);
    } else {
      // Si no está seleccionado, establecer solo el género actual como seleccionado
      setSelectedGenres([genre]);
    }
  };

  return (
    <div>
      <div>
        {genres.map((genre) => (
          <button
          key={genre.id}
          onClick={() => toggleGenre(genre)}
          className={`bg-${selectedGenres.some((selectedGenre) => selectedGenre.id === genre.id) ? 'blue' : 'white'} text-gray-800 py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300 transition-all m-2`}
        >
          {genre.name}
        </button>
        
        ))}
      </div>
    </div>
  );
};

export default Genre;
