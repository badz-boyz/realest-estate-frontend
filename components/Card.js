import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Image from 'next/image';

function Card({ imageSrc, title, description, address }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false); // State to manage the like status

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  // const toggleLike = () => setIsLiked(!isLiked); // Toggle the like status
  async function toggleLike(user, address, description) {
    const data = { user, address, description };
    setIsLiked(!isLiked);
    try {
        const response = await axios.post('http://localhost:8000/save/', data);
        console.log('Response from server:', response.data);
    } catch (error) {
        console.error('Error sending data to server:', error);
    }
}

  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="relative w-full h-56">
        <Image src={imageSrc} alt="House" layout="fill" objectFit="cover" />
      </div>
      <div className="p-5">
        <h5 className="text-lg font-semibold text-gray-900">{title}</h5>
        <p className="mt-2 text-base text-gray-700">{description}</p>
        <p className="mt-2 text-sm italic text-gray-600">{address}</p>
        <button onClick={openModal} className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Read more
        </button>
      </div>

      {/* Modal Implementation */}
      <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
          <div className="relative w-full max-w-4xl mx-4 bg-white rounded-lg shadow md:mx-0">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full h-64 md:flex-shrink-0 md:w-1/2 md:h-auto">
                <Image src={imageSrc} alt="House" layout="fill" objectFit="cover" className="rounded-t-lg md:rounded-none md:rounded-l-lg" />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <Dialog.Title className="mb-4 text-2xl font-bold text-gray-900">
                    {title}
                  </Dialog.Title>
                  <p className="text-lg text-gray-500">
                    {description}
                  </p>
                  <p className="mt-4 italic text-gray-500">
                    {address}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button onClick={() => toggleLike("user", address, description)} className="inline-flex items-center">
                    <svg className={`w-6 h-6 ${isLiked ? 'text-red-500' : 'text-gray-400'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                  <button onClick={closeModal} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Card;

