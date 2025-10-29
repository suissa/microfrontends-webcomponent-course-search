import React, { useState } from 'react';
import './styles.css';

const CourseSearch = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    window.dispatchEvent(new CustomEvent('filter-courses', { detail: { query } }));
  };

  return (
    <div className="search-container">
      <div className="search-input">
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.25 10.75a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
        </svg>
        <input
          type="text"
          placeholder="Busca..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default CourseSearch;
