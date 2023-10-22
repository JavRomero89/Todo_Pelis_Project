import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-30 h-full fixed left-0 top-0 flex flex-col items-start p-6 space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10" />
                {/* <h1 className="text-xl font-bold">Todo Pelis</h1> */}
            </div>

            {/* Botones */}
            <button className="w-full text-left hover:bg-gray-700 px-2 py-1 rounded">Movies</button>
            <button className="w-full text-left hover:bg-gray-700 px-2 py-1 rounded">TV Shows</button>
            <button className="w-full text-left hover:bg-gray-700 px-2 py-1 rounded">Documentales</button>
            <button className="w-full text-left hover:bg-gray-700 px-2 py-1 rounded">Contacto</button>
            
            {/* Botón de Login */}
            <div className="mt-auto">
                <button className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-center">Login</button>
            </div>
        </div>
    );
};

export default Sidebar;
