import { useState } from 'react';
import axios from 'axios';
import CardsContainer from './CardContainer';

export default function SearchComponent({fetchCardsData}) {
  const [searchTerm, setSearchTerm] = useState('');

  // Placeholder for your handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCardsData(searchTerm);

  };


  // const cardsData = [
  //   {
  //     id: 1,
  //     imageSrc: '/images/house1.jpg',
  //     title: 'House in the City',
  //     description: 'A beautiful city house with modern amenities.',
  //     address: '123 City Avenue, Metropolis',
  //   },
  //   {
  //     id: 2,
  //     imageSrc: '/images/house2.jpg',
  //     title: 'Country Retreat',
  //     description: 'Escape to the country in this cozy cottage.',
  //     address: '456 Country Road, Countryside',
  //   },
  //   {
  //     id: 3,
  //     imageSrc: '/images/house3.jpg',
  //     title: 'Beachfront Villa',
  //     description: 'Wake up to the ocean in this stunning villa.',
  //     address: '789 Ocean Drive, Beachtown',
  //   },
  // ];

  return (
    // This div wraps the entire component, ensuring it fills at least the viewport height
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/minecraft.png')"}}>
      
      {/* Search bar container */}
      <div className="flex flex-col items-center justify-center p-10">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h1 className="mb-4 text-4xl font-bold text-black">Your Dream Home Awaits</h1>
          <div className="flex border-2 border-blue-500 rounded-lg overflow-hidden">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 w-full text-black"
              placeholder="Search..."
            />
            <button type="submit" className="flex items-center justify-center px-4 border-l border-blue-500">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
