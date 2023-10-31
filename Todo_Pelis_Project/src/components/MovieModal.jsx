import React from 'react'

const MovieModal = ({ movie, close }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative max-w-xl w-full bg-white p-6 rounded-lg shadow-md">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={close}>
                    &times;  {/* Representa una "x" para cerrar el modal */}
                </button>
                <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
                <p className="text-gray-700 mb-4">{movie.overview}</p>
                {/* Puedes agregar más información de la película aquí */}
            </div>
        </div>
    );
};

export default MovieModal