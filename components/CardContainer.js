import Card from './Card';

function CardsContainer({cardsData }) {
  
  console.log(cardsData);


  const sampleData = [
    {
      id: 1,
      imageSrc: '/images/house1.jpg',
      title: 'House in the City',
      description: 'A beautiful city house with modern amenities.',
      address: '123 City Avenue, Metropolis',
    },
    {
      id: 2,
      imageSrc: '/images/house2.jpg',
      title: 'Country Retreat',
      description: 'Escape to the country in this cozy cottage.',
      address: '456 Country Road, Countryside',
    },
    {
      id: 3,
      imageSrc: '/images/house3.jpg',
      title: 'Beachfront Villa',
      description: 'Wake up to the ocean in this stunning villa.',
      address: '789 Ocean Drive, Beachtown',
    },
  ];

  const dataToDisplay = cardsData.length > 0 ? cardsData : sampleData;


  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4 p-4">
        {dataToDisplay.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            address={card.address}
          />
        ))}
      </div>
  );
}

export default CardsContainer;
