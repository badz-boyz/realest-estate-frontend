import Card from "../components/Card";
import { useState, useEffect } from "react";

export default function SavedHomesPage() {
  const [savedHomes, setSavedHomes] = useState([]);
  const sampleData = [
    {
      id: 1,
      imageSrc: "/images/house1.jpg",
      title: "House in the City",
      description: "A beautiful city house with modern amenities.",
      address: "123 City Avenue, Metropolis",
    },
    {
      id: 2,
      imageSrc: "/images/house2.jpg",
      title: "Country Retreat",
      description: "Escape to the country in this cozy cottage.",
      address: "456 Country Road, Countryside",
    },
  ];

  useEffect(() => {
    // Fetch saved homes based on the user's email
    const fetchSavedHomes = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/saved-homes/${email}`
        );
        if (response.ok) {
          const data = await response.json();
          setSavedHomes(data);
        }
      } catch (error) {
        console.error("Error fetching saved homes:", error);
      }
    };

    fetchSavedHomes();
  }, []); // Run only once on component mount

  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>Your saved listings are below</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4 mt-8">
        {sampleData.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            address={card.address}
          />
        ))}
      </div>
    </>
  );
}
