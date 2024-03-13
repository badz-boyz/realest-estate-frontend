export default function Footer(){
    return (
        <footer className="bg-black text-white">
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
            <div className="xl:flex lg:flex md:flex pt-6">
              <div className="xl:w-1/3 lg:w-1/3 md:w-1/3 mb-6 flex justify-center md:justify-start">
                <a href="#" className="text-xl font-bold">Brand</a>
              </div>
    
              <div className="xl:w-1/3 lg:w-1/3 md:w-1/3 mb-6">
                <h6 className="uppercase font-bold mb-2 flex justify-center md:justify-start">Links</h6>
                <p className="flex items-center justify-center md:justify-start">
                  <a href="#" className="text-white">Home</a>
                  <span className="mx-2">|</span>
                  <a href="#" className="text-white">About</a>
                  <span className="mx-2">|</span>
                  <a href="#" className="text-white">Contact</a>
                </p>
              </div>
    
              <div className="xl:w-1/3 lg:w-1/3 md:w-1/3 mb-6 flex justify-center md:justify-end">
                <div className="flex">
                  {/* Add or update social icons and links as needed */}
                  <a href="#" className="w-6 mx-1">
                    <img src="images/heart.png" alt="Social icon" className="w-full"/>
                  </a>
                  <a href="#" className="w-6 mx-1">
                    <img src="images/heart.png" alt="Social icon" className="w-full"/>
                  </a>
                </div>
              </div>
            </div>
    
            <div className="pt-6 mt-6 border-t border-gray-700 text-center">
              <p>© 2024 Brand. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      );
}