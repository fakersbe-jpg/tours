import { Star, MapPin } from 'lucide-react';

const popularDestinations = [
{
  name: 'BURJ KHALIFA',
  rating: 4.8,
  address: '1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai',
  price: 'AED 169+',
  type: 'attraction',
  description: "The world's tallest building with breathtaking views of Dubai from its observation decks.",
  tags: ['Observation Deck', 'Restaurants', 'Fountain Show'],
},
{
  name: 'ATLANTIS THE PALM',
  rating: 4.7,
  address: 'Crescent Rd, Palm Jumeirah, Dubai',
  price: 'AED 1200+',
  type: 'hotel',
  description: 'Luxury resort on Palm Jumeirah with water park, aquarium, and world-class dining.',
  tags: ['Resort', 'Water Park', 'Aquarium'],
},
{
  name: 'AL FANAR RESTAURANT',
  rating: 4.5,
  address: 'The Dubai Mall, Financial Centre Rd, Dubai',
  price: 'AED 150+',
  type: 'restaurant',
  description: 'Authentic Emirati cuisine in a traditional setting with cultural ambiance.',
  tags: ['Emirati Cuisine', 'Cultural', 'Fine Dining'],
},
{
  name: 'JUMEIRAH BEACH',
  rating: 4.6,
  address: 'Jumeirah Road, Dubai',
  price: 'Free',
  type: 'beach',
  description: 'Pristine white sand beach with crystal clear waters and stunning views of Burj Al Arab.',
  tags: ['Beach', 'Swimming', 'Sunset'],
},
];

export default function PopularDestinations() {
return (
  <section className="py-16 lg:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-2">
        <span className="text-sm font-semibold text-primary tracking-wider uppercase">
          Explore Popular Destinations
        </span>
        <h2 className="text-3xl font-bold text-gray-900">Explore Popular Destinations</h2>
        <p className="text-base text-gray-600">
          Discover the best places to visit in United Arab Emirates
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {popularDestinations.map((dest) => (
            <div
              key={dest.name}
              className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-gray-900">{dest.name}</h3>
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg shadow-sm">
                    <Star size={12} className="text-secondary fill-secondary" />
                    <span className="text-sm font-semibold text-gray-800">{dest.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                  <MapPin size={12} />
                  <span className="truncate">{dest.address}</span>
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-semibold text-primary">{dest.price}</span>
                  <span className="text-xs text-gray-500 capitalize bg-gray-100 px-2 py-0.5 rounded-full">
                    {dest.type}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-6 pt-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4</p>
              <p className="text-xs text-gray-500">Destinations</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4.7</p>
              <p className="text-xs text-gray-500">Avg. Rating</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gray-100 min-h-[400px]">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=54.8%2C24.9%2C56.0%2C25.4&layer=mapnik"
            className="absolute inset-0 w-full h-full border-0"
            title="Map of UAE"
          />
        </div>
      </div>
    </div>
  </section>
);
}