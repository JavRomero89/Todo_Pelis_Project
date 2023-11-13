// import React, { useState, useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import MovieModal from './MovieModal';

// import YouTube from 'react-youtube';

// const CarouselSection = ({ isSidebarOpen }) => {
//   const [movies, setMovies] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [currentMovie, setCurrentMovie] = useState(null);
//   const modalRef = useRef(null);
//   let timeoutId = null;
//     // const [trailer, setTrailer]= useState(null);
//     // const [playing, setPlaying]= useState(false)

//     useEffect(() => {
//         const fetchMovies = async () => {
//             const API_KEY = 'ced816c83a36de6db0fb51255d2a4091';
//             const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

//             try {
//               const [movieResponse] = await Promise.all([fetch(MOVIE_API_URL)]);
//               const [movieData] = await Promise.all([movieResponse.json()]);

//               if (movieResponse.ok) {
//                   setMovies(movieData.results);
//               } else {
//                   console.error("Error fetching movies:", movieData.status_message);
//               }
//           } catch (error) {
//               console.error("Error fetching movies:", error);
//           }
//       };

//       fetchMovies();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true,
//             },
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 initialSlide: 2,
//             },
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//     ],
// };

// const carouselStyle = {
//   marginLeft: isSidebarOpen ? '120px' : '0',
//   transition: 'margin 0.5s',
// };

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//       <div
//           className={className}
//           style={{ ...style, display: "block", background: "black" }}
//           onClick={onClick}
//       />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//       <div
//           className={className}
//           style={{ ...style, display: "block", background: "black" }}
//           onClick={onClick}
//       />
//   );
// }

// const handleMouseEnter = (movie) => {

//   timeoutId = setTimeout(() => {
//       setCurrentMovie(movie);
//       setShowModal(true);
//   }, 1000);
// };

// const handleMouseLeave = () => {

//   clearTimeout(timeoutId);
// };

// const handleCloseModal = () => {
//   setCurrentMovie(null);
//   setShowModal(false);
// };

// useEffect(() => {
//   const handleOutsideClick = (e) => {
//       if (modalRef.current && !modalRef.current.contains(e.target)) {
//           handleCloseModal();
//       }
//   };

//   if (showModal) {
//       document.addEventListener('mousedown', handleOutsideClick);
//   } else {
//       document.removeEventListener('mousedown', handleOutsideClick);
//   }

//   return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//   };
// }, [showModal]);

// return (
//   <div className=" my-8 w-full flex flex-col items-center justify-center" style={carouselStyle}>
//       <div className="w-[80%]">
//           <Slider {...settings}>
//               {movies.map((movie) => (
//                   <div
//                       key={movie.id}
//                       className="p-4"
//                       onMouseEnter={() => handleMouseEnter(movie)}
//                       onMouseLeave={handleMouseLeave} // Cancelar el timeout al retirar el ratón
//                   >
//                       <img
//                           src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                           alt={movie.title}
//                           className="w-full rounded-md shadow-lg transition-transform transform hover:scale-105"
//                       />
//                       <h4 className="mt-2 text-center text-lg font-semibold">{movie.title}</h4>
//                   </div>
//               ))}
//           </Slider>
//           {showModal && currentMovie && (
//               <div className="modal" ref={modalRef}>
//                   <MovieModal movie={currentMovie} close={handleCloseModal} />
//               </div>
//           )}
//       </div>
//   </div>
// );
// };

// export default CarouselSection;

import { useEffect } from "react";
import "../App.css";
import { useState } from "react";
import YouTube from "react-youtube";

function CarouselSection() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
  //   const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  // Estado para controlar cuántas películas se muestran inicialmente
  const [initialMoviesToShow, setInitialMoviesToShow] = useState(5);

  // Estado para controlar cuántas películas se mostrarán al hacer clic en el boton
  const [additionalMoviesToShow, setAdditionalMoviesToShow] = useState(30);

  const [moviesToShow, setMoviesToShow] = useState(initialMoviesToShow);

  // Estado para controlar si se muestran todas las películas o no
  const [showAllMovies, setShowAllMovies] = useState(false);

  // Función para mostrar más películas
  const showMoreMovies = () => {
    setMoviesToShow(initialMoviesToShow + additionalMoviesToShow);
    setShowAllMovies(true);
  };

  // Función para volver a mostrar solo las 6 películas iniciales
  const showInitialMovies = () => {
    setMoviesToShow(initialMoviesToShow);
    setShowAllMovies(false);
  };

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    try {
      const response = await fetch(
        `${API_URL}/${type}/movie?api_key=${API_KEY}&query=${searchKey}`
      );
      const data = await response.json();
      const results = data.results;
      setMovies(results);
      setMovie(results[0]);

      if (results.length) {
        await fetchMovie(results[0].id);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // funcion para la peticion de un solo objeto y mostrar en reproductor de videos
  const fetchMovie = async (id) => {
    try {
      const response = await fetch(
        `${API_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
      );
      const data = await response.json();

      if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : data.videos.results[0]);
      }
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  const selectMovie = async (movie) => {
    fetchMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  // funcion para buscar peliculas
  const searchMovies = (event) => {
    event.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="w-80%">
      <h2 className="text-center text-3xl mt-5 mb-5">Trailer Popular Movies</h2>

      {/* el buscador */}
      <form className="container mb-4 " onSubmit={searchMovies}>
        <input
          className="border border-solid border-black"
          type="text"
          placeholder=" Search"
          onChange={(event) => setSearchKey(event.target.value)}
        />
        <button className="btn btn-primary"> Search</button>
      </form>

      <div>
        <main>
          {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${URL_IMAGE}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton">
                    Close
                  </button>
                </>
              ) : (
                <div className="container bg-black bg-opacity-50 rounded-md ">
                  <div className="">
                    {trailer ? (
                      <button
                        className="boton"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1 className="text-white text-5xl">{movie.title}</h1>
                    <p className="text-white">{movie.overview}</p>
                    <p className="text-sm text-white">
                      Lenguaje Original: {movie.original_language}
                    </p>
                    <p className="text-sm text-white">
                      Fecha de Lanzamiento: {movie.release_date}
                    </p>
                    <p className="text-sm text-white">
                      Rating: {movie.vote_average} (de {movie.vote_count} votos)
                    </p>
                    <p className="text-sm text-white">
                      Clasificación: {movie.certification}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>

      {/* Cards de películas */}
      <div className="container mt-3">
        <div className="grid grid-cols-5 gap-4">
          {movies.slice(0, moviesToShow).map((movie) => (
            <div
              key={movie.id}
              className="mr-4 mb-6 cursor-pointer"
              onClick={() => selectMovie(movie)}
            >
              <img
                src={`${URL_IMAGE + movie.poster_path}`}
                alt=""
                height={600}
                width="100%"
              />
              <h3 className="">{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Botón para mostrar más o menos peliculas */}
      {showAllMovies ? (
        <div className="text-center">
          <button onClick={showInitialMovies} className="btn btn-primary">
            Mostrar Menos
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button onClick={showMoreMovies} className="btn btn-primary">
            Mostrar populares
          </button>
        </div>
      )}
    </div>
  );
}

export default CarouselSection;
