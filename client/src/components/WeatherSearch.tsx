import React, { useState } from 'react';
import styles from '../styles/WeatherSearch.module.scss';

interface WeatherSearchProps {
  onSearch: (city: string, country: string) => void;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city, country);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        required
      />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter country code"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default WeatherSearch;