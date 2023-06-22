import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    return (
        
        <Link to={`../country/${country.cca2}`}>
        <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
          <img
            src={country.flags.png}
            alt='country flag'
            className='object-cover w-full h-56 md:h-64 xl:h-80'
          />
  
          <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
            <p className='text-'>{country.name.common}</p>
            <br />
            <p>{country.altSpellings[1]}...</p>
            <br />
            <p className='mt-auto'>Population: {country.population}</p>
          </div>
        </div>
      </Link>
    );
};

export default Country;