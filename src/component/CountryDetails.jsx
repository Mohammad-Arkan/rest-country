import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
  const country = useLoaderData()
  console.log(country)
  return (
    <div>
      <h2>Country info</h2>
    </div>
  );
};

export default CountryDetails;