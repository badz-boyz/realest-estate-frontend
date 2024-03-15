import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Image from 'next/image';

export default function DetailedModal({ listing, onClose }) {
    
  const [isLiked, setIsLiked] = useState(false); // Assuming you want to track like status here
  const toggleLike = () => setIsLiked(!isLiked);

  if (!listing) return null; // Guard clause if no listing is provided

  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
        <div className="relative bg-white rounded-lg shadow max-w-4xl w-full mx-4 md:mx-0">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:flex-shrink-0 w-full h-64 md:w-1/2 md:h-auto">
              <Image src={listing.imageSrc} alt={listing.title} layout="fill" objectFit="cover" className="rounded-t-lg md:rounded-none md:rounded-l-lg" />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <Dialog.Title className="text-2xl font-bold text-gray-900 mb-4">
                  {listing.address}
                </Dialog.Title>
                <p className="text-lg text-gray-500">
                  {listing.description}
                </p>
                <p className="italic text-gray-500 mt-4">
                  {listing.address}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button onClick={toggleLike} className="inline-flex items-center">
                  {/* SVG for Like/Unlike */}
                  <svg className={`w-6 h-6 ${isLiked ? 'text-red-500' : 'text-gray-400'}`} viewBox="0 0 20 20" fill="currentColor">
                    {/* Conditional rendering for like icon path */}
                    {isLiked ? (
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.07l-6.828-6.828a4 4 0 010-5.656z" clipRule="evenodd" />
                    ) : (
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.07l-6.828-6.828a4 4 0 010-5.656z" clipRule="evenodd" />
                    )}
                  </svg>
                </button>
                <button onClick={onClose} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
