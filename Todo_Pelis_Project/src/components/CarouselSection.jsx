import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieModal from './MovieModal';

const CarouselSection = () => {
    const [movies, setMovies] = useState([]);
    const [showModal, setShowModal] = useState(false);  // Estado para controlar si se muestra el modal
    const [currentMovie, setCurrentMovie] = useState(null);  // Estado para almacenar la película actual al pasar el mouse


    useEffect(() => {
        const fetchMovies = async () => {
            const API_KEY = 'ced816c83a36de6db0fb51255d2a4091'; // Reemplaza 'TU_API_KEY' con tu clave de API de TMDb.
            const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

            try {
                const response = await fetch(MOVIE_API_URL);
                const data = await response.json();

                if (response.ok) {
                    setMovies(data.results);
                } else {
                    console.error("Error fetching movies:", data.status_message);
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
        prevArrow: <SamplePrevArrow /> ,  
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
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
        setCurrentMovie(movie);
        setShowModal(true);
    }

    const handleMouseLeave = () => {
        setShowModal(false);
    }

    return (
        <div className="movie-carousel my-8">
            <Slider {...settings}>
                {movies.map(movie => (
                    <div key={movie.id} className="p-4">
                       <img 
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={movie.title} 
                            className="w-full rounded-md shadow-lg transition-transform transform hover:scale-105"
                            onMouseEnter={() => handleMouseEnter(movie)}
                            onMouseLeave={handleMouseLeave}
                        />
                        <h4 className="mt-2 text-center text-lg font-semibold">{movie.title}</h4>
                    </div>
                ))}
            </Slider>

            {showModal && currentMovie && <MovieModal movie={currentMovie} close={() => setShowModal(false)} />}
        </div>
    );
};


export default CarouselSection