import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadSpenner';
import Country from './Country';

const Countries = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
      return <LoadingSpinner />
    }

    const countries = useLoaderData();
    console.log(countries)
    return (
        <div>
           <div className='my-container'>
      <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
        {countries.map(country => (
            <Country
            key={country.cca2}
            country={country}
            ></Country>
        //   <Book key={book.isbn13} book={book} />
        ))}
      </div>
    </div>
        </div>
    );
};

export default Countries;