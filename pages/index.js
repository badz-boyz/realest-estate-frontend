import { useState } from 'react';
import axios from 'axios';
import SearchComponent from "../components/InputSearch";
import CardsContainer from "../components/CardContainer";
import EmblaCarousel from '../components/EmblaCarousel';

const OPTIONS = { loop: true };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  const [cardsData, setCardsData] = useState([]);


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const fetchCardsData = async (searchTerm) => {
    try {
      const response = await axios.get(`https://realest-estate-backend.vercel.app/listings/${encodeURIComponent(searchTerm)}`);
      const listings = response.data;
  
      // Transform the object into an array and assign random stock photos
      const transformedData = Object.keys(listings).map((address, index) => {
        return {
          id: index,
          imageSrc: `/images/house${getRandomInt(1, 20)}.jpg`,
          title: address,
          description: listings[address].description,
          address: `${address}, ${listings[address].city}`,
        };
      });
  
      setCardsData(transformedData);
    } catch (error) {
      console.error("Failed to fetch data: ", error);
    }
  };
  

  return (
    <div>
      <SearchComponent fetchCardsData={fetchCardsData} />
      <CardsContainer key={cardsData.length} cardsData={cardsData} />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
