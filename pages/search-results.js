// pages/search-results.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Gallery from '../components/Gallery';

export default function SearchResultsPage() {
  const [allHouses, setAllHouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [displayedHouses, setDisplayedHouses] = useState([]);

  const fetchCardsData = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:8000/listings/${encodeURIComponent(searchTerm)}`);
      const listingsArray = Object.keys(response.data).map(key => {
        return {
          address: key,
          ...response.data[key] // Spread the rest of the property details
        };
      });
      setAllHouses(listingsArray);
      setCurrentPage(1); // Reset to first page with new search results
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    // Calculate and set the displayed houses based on the current page
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayedHouses(allHouses.slice(start, end));
  }, [allHouses, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(allHouses.length / itemsPerPage)));
  };

  return (
    <div>
      <SearchBar onSearch={fetchCardsData} />
      <div className="mt-8 mb-4">
        <h2 className="text-2xl font-bold text-center">Search Results</h2>
      </div>
      <Gallery listings={displayedHouses} />
      <div className="flex flex-col items-center mt-8">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-semibold text-gray-900 dark:text-white">{Math.min(currentPage * itemsPerPage, allHouses.length)}</span> of <span className="font-semibold text-gray-900 dark:text-white">{allHouses.length}</span> Entries
        </span>
        <div className="inline-flex mt-2">
          <button onClick={handlePrevPage} className="px-4 py-2 mx-1 bg-gray-300 rounded-md">
            Prev
          </button>
          <button onClick={handleNextPage} className="px-4 py-2 mx-1 bg-gray-300 rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
