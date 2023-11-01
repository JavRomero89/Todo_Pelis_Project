import React from 'react';

const MovieModal = ({ movie, close }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="modal-container bg-white p-6 rounded-lg shadow-md w-1/4">
                <button
                    className="modal-close absolute top-2 right-2 text-gray-600"
                    onClick={close}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex">
                    <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.title}
                        className="w-48 h-72 rounded-md float-left mr-4"
                    />
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
                        <p className="text-gray-700 mb-4">{movie.overview}</p>
                        <p className="text-sm text-gray-500">Lenguaje Original: {movie.original_language.toUpperCase()}</p>
                        <p className="text-sm text-gray-500">Fecha de Lanzamiento: {movie.release_date}</p>
                        <p className="text-sm text-gray-500">Rating: {movie.vote_average} (de {movie.vote_count} votos)</p>
                        <p className="text-sm text-gray-500">Clasificación: {movie.certification}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;




