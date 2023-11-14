import React, { useState, useEffect } from 'react';
import Genre from '../components/Genre';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

const TVShows = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarMouseLeave = () => {
    setIsSidebarOpen(false);
  };

  const tvShowStyle = {
    marginLeft: isSidebarOpen ? '150px' : '0',
    transition: 'margin 0.5s',
  };

  useEffect(() => {
    // Llamada a la API para obtener la lista de géneros
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/genre/tv/list?api_key=ced816c83a36de6db0fb51255d2a4091&language=en-US'
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    // Llamada a la API para obtener los programas de TV basados en géneros seleccionados
    const fetchTVShows = async () => {
      const genreIds = selectedGenres.map((genre) => genre.id).join(',');
      const url = `https://api.themoviedb.org/3/discover/tv?api_key=ced816c83a36de6db0fb51255d2a4091&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genreIds}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setTVShows(data.results);
        setTotalPages(data.total_pages);

        // Desplazar la ventana hacia arriba al cambiar de página
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchTVShows();
  }, [selectedGenres, page]);

  return (
    <div>
      <div
        className="w-[60px] h-full"
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
      >
        <Sidebar />
      </div>
      <div className="p-20" style={{ marginLeft: isSidebarOpen ? '150px' : '0', transition: 'margin 0.5s' }}>

        <h1 className='text-center text-5xl font-bold'>TV Shows</h1>
        <Genre genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />

        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 mr-2 rounded"
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Anterior
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 ml-2 rounded"
            onClick={() => setPage((prevPage) => Math.min(prevPage + 1, totalPages))}
            disabled={page === totalPages}
          >
            Siguiente
          </button>
        </div>

        <div className="flex flex-wrap">
          {tvShows.map((tvShow) => (
            <div key={tvShow.id} className="w-1/5 p-4">
              <Card movie={tvShow} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 mr-2 rounded"
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Anterior
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 ml-2 rounded"
            onClick={() => setPage((prevPage) => Math.min(prevPage + 1, totalPages))}
            disabled={page === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default TVShows;
