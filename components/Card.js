import Image from "next/image";

function Card({ imageSrc, title, description, address }) {
    return (
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="w-full h-56 relative">
        <Image
          src={imageSrc}
          alt="House"
          layout="fill" // This makes the image cover the div, adjust as needed
          objectFit="cover" // Adjust how the image fits within the div
        />
      </div>
        <div className="p-5">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h5>
          <p className="mt-2 text-base text-gray-700 dark:text-gray-400">{description}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{address}</p>
          <a href="#" className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            {/* SVG icon can be added here */}
          </a>
        </div>
      </div>
    );
  }
  
  export default Card;
  