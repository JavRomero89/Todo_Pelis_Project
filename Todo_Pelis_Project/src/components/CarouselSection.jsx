import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieModal from './MovieModal';

import YouTube from 'react-youtube';

const CarouselSection = ({ isSidebarOpen }) => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null); 
  const modalRef = useRef(null); 
  let timeoutId = null;
    // const [trailer, setTrailer]= useState(null);
    // const [playing, setPlaying]= useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            const API_KEY = 'ced816c83a36de6db0fb51255d2a4091'; 
            const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
            

            try {
              const [movieResponse] = await Promise.all([fetch(MOVIE_API_URL)]);
              const [movieData] = await Promise.all([movieResponse.json()]);

              if (movieResponse.ok) {
                  setMovies(movieData.results);
              } else {
                  console.error("Error fetching movies:", movieData.status_message);
              }
          } catch (error) {
              console.error("Error fetching movies:", error);
          }
      };

      fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const carouselStyle = {
  marginLeft: isSidebarOpen ? '120px' : '0', 
  transition: 'margin 0.5s', 
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "black" }}
          onClick={onClick}
      />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "black" }}
          onClick={onClick}
      />
  );
}

const handleMouseEnter = (movie) => {
  
  timeoutId = setTimeout(() => {
      setCurrentMovie(movie);
      setShowModal(true);
  }, 1000);
};

const handleMouseLeave = () => {
  
  clearTimeout(timeoutId);
};

const handleCloseModal = () => {
  setCurrentMovie(null);
  setShowModal(false);
};

useEffect(() => {
  const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
          handleCloseModal();
      }
  };

  if (showModal) {
      document.addEventListener('mousedown', handleOutsideClick);
  } else {
      document.removeEventListener('mousedown', handleOutsideClick);
  }

  return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
  };
}, [showModal]);

return (
  <div className=" my-8 w-full flex flex-col items-center justify-center" style={carouselStyle}>
      <div className="w-[80%]">
          <Slider {...settings}>
              {movies.map((movie) => (
                  <div
                      key={movie.id}
                      className="p-4"
                      onMouseEnter={() => handleMouseEnter(movie)}
                      onMouseLeave={handleMouseLeave} // Cancelar el timeout al retirar el ratón
                  >
                      <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={movie.title}
                          className="w-full rounded-md shadow-lg transition-transform transform hover:scale-105"
                      />
                      <h4 className="mt-2 text-center text-lg font-semibold">{movie.title}</h4>
                  </div>
              ))}
          </Slider>
          {showModal && currentMovie && (
              <div className="modal" ref={modalRef}>
                  <MovieModal movie={currentMovie} close={handleCloseModal} />
              </div>
          )}
      </div>
  </div>
);
};

export default CarouselSection;