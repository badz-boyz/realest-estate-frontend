// components/Gallery.js
import { useState } from 'react';
import GalleryModal from './GalleryModal'; // Assuming this is your modal component

const Gallery = ({ listings }) => {
  const [selectedListing, setSelectedListing] = useState(null);

  const openModalWithListing = (listing) => {
    setSelectedListing(listing);
  };

  return (
    <div>
      <div className="grid max-w-screen-lg grid-cols-2 gap-4 mx-auto md:grid-cols-3">
        {listings.map((listing, index) => (
          <div key={index} onClick={() => openModalWithListing(listing)}>
            <img className="h-auto max-w-full rounded-lg" src={listing.imageSrc} alt={listing.title} style={{ width: '415px', height: '275px', objectFit: 'cover' }}  />
          </div>
        ))}
      </div>
      {selectedListing && <GalleryModal listing={selectedListing} onClose={() => setSelectedListing(null)} />}
    </div>
  );
};

export default Gallery;