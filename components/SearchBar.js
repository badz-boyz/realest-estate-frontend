// components/SearchBar.js
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Trigger search with the current search term
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8">
      <div className="flex border-2 border-blue-500 rounded-lg overflow-hidden">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-full"
          placeholder="Search..."
        />
        <button type="submit" className="px-4 bg-blue-500 text-white">
          Search
        </button>
      </div>
    </form>
  );
}
