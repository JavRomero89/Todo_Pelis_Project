import React, { useState, useEffect } from 'react';
import Genre from '../components/Genre';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

const Kids = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [kidsContent, setKidsContent] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarMouseLeave = () => {
    setIsSidebarOpen(false);
  };

  const kidsContentStyle = {
    marginLeft: isSidebarOpen ? '150px' : '0',
    transition: 'margin 0.5s',
  };

  const fetchKidsGenres = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=ced816c83a36de6db0fb51255d2a4091&language=en-US'
      );
      const data = await response.json();
      setKidsGenres(data.genres);
    } catch (error) {
      console.error('Error fetching kids genres:', error);
    }
  };
  
  useEffect(() => {
    fetchKidsGenres();
  }, []);

  useEffect(() => {
    // Llamada a la API para obtener contenido para niños basado en géneros seleccionados
    const fetchKidsMovies = async () => {
      const kidsGenreId = 16; // Este es un ejemplo, asegúrate de tener el ID correcto para el género de niños
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=ced816c83a36de6db0fb51255d2a4091&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${kidsGenreId}`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
        setKidsMovies(data.results);
        setTotalKidsPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching kids movies:', error);
      }
    };
    
    useEffect(() => {
      fetchKidsMovies();
    }, [page]);
    

  return (
    <div>
      <div
        className="w-[60px] h-full"
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
      >
        <Sidebar />
      </div>
      <div className="p-20" style={kidsContentStyle} isSidebarOpen={isSidebarOpen}>
        <h1 className='text-center text-5xl font-bold'>Kids Content</h1>
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
          {kidsContent.map((content) => (
            <div key={content.id} className="w-1/5 p-4">
              <Card movie={content} />
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
  });
}
  

export default Kids;
