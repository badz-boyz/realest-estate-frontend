import { useState } from 'react';

export default function SearchComponent({fetchCardsData}) {
  const [searchTerm, setSearchTerm] = useState('');

  // Placeholder for your handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCardsData(searchTerm);

  };

  return (
    // This div wraps the entire component, ensuring it fills at least the viewport height
    <div className="flex flex-col bg-center bg-cover" style={{backgroundImage: "url('/images/minecraft.png')", height: "400px"}}>
      
      {/* Search bar container */}
      <div className="flex flex-col items-center justify-center p-10">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h1 className="mb-4 text-4xl font-bold text-black">Your Dream Home Awaits</h1>
          <div className="flex overflow-hidden border-2 border-blue-500 rounded-lg">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 text-black"
              placeholder="Enter city name"
            />
            <button type="submit" className="flex items-center justify-center px-4 bg-blue-200 border-l border-blue-500">
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
