import { useState } from 'react';
import axios from 'axios';
import SearchComponent from '../components/InputSearch';
import CardsContainer from '../components/CardContainer';

export default function SearchResultsPage() {
  const [cardsData, setCardsData] = useState([]);

  const fetchCardsData = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:8000/listings/${encodeURIComponent(searchTerm)}`);
      const listings = response.data;
  
      // Assume listings is an array. Adjust if the structure is different.
      // Slice the first 10 listings for display
      const transformedData = listings.slice(0, 10).map((listing, index) => ({
        id: index,
        imageSrc: listing.imageSrc || `/images/house${index + 1}.jpg`, // Fallback to a default image
        title: listing.title,
        description: listing.description,
        address: listing.address,
      }));
  
      setCardsData(transformedData);
    } catch (error) {
      console.error("Failed to fetch data: ", error);
    }
  };

  return (
    <div>
      <SearchComponent fetchCardsData={fetchCardsData} />
      <CardsContainer cardsData={cardsData} />
    </div>
  );
}
