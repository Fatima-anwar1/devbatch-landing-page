interface Props {
  placeName: string;
  country: string;
  budget: number;
  duration: string;
  season: string;
}

export default function Destination({ placeName, country, budget, duration, season }: Props) {
  const isBudgetFriendly = budget < 50000;
  
  // Image path: hum placeName ko small letter mein convert kar rahe hain taake file match ho jaye
  const imagePath = `/${placeName.toLowerCase()}.jpg`;

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full">
      {/* Image Section */}
      <img 
        src={imagePath} 
        alt={placeName} 
        className="w-full h-48 object-cover"
        onError={(e) => {
            // Agar image na mile to default color box dikhaye ga
            e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
        }}
      />
      
      {/* Content Section */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-900">{placeName}</h2>
        <p className="text-gray-500 font-medium mb-3">{country}</p>
        
        <div className="text-sm text-gray-600 mb-4 space-y-1">
          <p>📅 Duration: {duration}</p>
          <p>☀️ Season: {season}</p>
        </div>

        {/* Badge */}
        <div className={`px-4 py-1 rounded-full text-xs font-bold inline-block mb-4 ${
          isBudgetFriendly ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {isBudgetFriendly ? 'Budget Friendly' : 'Luxury Trip'}
        </div>

        {/* Price */}
        <div className="text-xl font-extrabold text-blue-600">
          PKR {budget.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
