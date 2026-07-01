import Destination from './Destinations';

export default function Cards2() {
  // Requirement: JSON Structure
  const destinations = [
    { id: 1, placeName: 'Hunza', country: 'Pakistan', budget: 45000, duration: '5 Days', season: 'Summer' },
    { id: 2, country: 'UAE', placeName: 'dubai', budget: 150000, duration: '4 Days', season: 'Winter' },
    { id: 3, country: 'Turkey', placeName: 'Istanbul', budget: 200000, duration: '7 Days', season: 'Spring' },
    { id: 4, country: 'Pakistan', placeName: 'Sakardu', budget: 35000, duration: '6 Days', season: 'Autumn' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">Popular Travel Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {/* Requirement: Display using .map() */}
        {destinations.map((dest) => (
          <Destination key={dest.id} {...dest} />
        ))}
      </div>
    </div>
  );
}
