import React from 'react';

const Card = ({ movie, isSelected }) => {
  const { title, overview, poster_path } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className={`border p-4 ${isSelected ? 'border-blue-500' : 'border-gray-300'}`}>
      <img src={imageUrl} alt={title} className="w-full h-auto rounded-md"/>
      <h3 className='text-1xl font-bold h-12'>{title}</h3>
      <p className="h-36 overflow-hidden text-ellipsis max-h-[9.5em]">
        {overview}
      </p>
    </div>
  );
};

export default Card;

