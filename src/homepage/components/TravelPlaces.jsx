import { Star, Users, MapPin, Clock } from 'lucide-react';

const destinations = [
{
  name: 'Dubai',
  price: 2400,
  rating: 4.8,
  people: 8,
  location: 'Downtown Dubai - Near Burj Khalifa',
  tags: ['Luxury', 'Beach', 'Shopping'],
  days: 5,
  maxPeople: 8,
  image: 'https://rwampsglobaltoursconsult.com/assets/user_one-CWCMHY8k.png',
},
{
  name: 'Riyadh',
  price: 2100,
  rating: 4.6,
  people: 6,
  location: 'King Abdulaziz Road, Al-Murabba District',
  tags: ['Cultural', 'Desert', 'History'],
  days: 4,
  maxPeople: 6,
  image: 'https://rwampsglobaltoursconsult.com/assets/tours_two-jnmDaDVi.png',
},
{
  name: 'Abu Dhabi',
  price: 2900,
  rating: 4.9,
  people: 10,
  location: 'Sheikh Zayed Grand Mosque Area',
  tags: ['Premium', 'Architecture', 'Luxury'],
  days: 6,
  maxPeople: 10,
  image: 'https://rwampsglobaltoursconsult.com/assets/tours_three-BF86vEF9.png',
},
{
  name: 'Sharjah',
  price: 1800,
  rating: 4.4,
  people: 4,
  location: 'Al Qasba Cultural District',
  tags: ['Cultural', 'Art', 'Museum'],
  days: 3,
  maxPeople: 4,
  image: 'https://rwampsglobaltoursconsult.com/assets/tours_four-BDDe0s2U.png',
},
{
  name: 'Fujairah',
  price: 3200,
  rating: 4.7,
  people: 12,
  location: 'East Coast Mountains & Beaches',
  tags: ['Adventure', 'Beach', 'Mountains'],
  days: 7,
  maxPeople: 12,
  image: 'https://rwampsglobaltoursconsult.com/assets/tours_five-fIp1zHlF.png',
},
{
  name: 'Al Ain',
  price: 1950,
  rating: 4.5,
  people: 6,
  location: 'Oasis City, Garden City Region',
  tags: ['Nature', 'Heritage', 'Family'],
  days: 4,
  maxPeople: 6,
  image: 'https://rwampsglobaltoursconsult.com/assets/tours_four-BDDe0s2U.png',
},
{
  name: 'Muscat',
  price: 2750,
  rating: 4.8,
  people: 8,
  location: 'Oman Coastal Road, Muttrah Area',
  tags: ['Luxury', 'Coastal', 'Spa'],
  days: 5,
  maxPeople: 8,
  image: 'https://rwampsglobaltoursconsult.com/assets/tours_three-BF86vEF9.png',
},
{
  name: 'Doha',
  price: 2200,
  rating: 4.6,
  people: 6,
  location: 'West Bay, Pearl District',
  tags: ['Modern', 'Shopping', 'Luxury'],
  days: 4,
  maxPeople: 6,
  image: 'https://rwampsglobaltoursconsult.com/assets/tours_two-jnmDaDVi.png',
},
];

export default function TravelPlaces() {
return (
  <section id="tours" className="py-16 lg:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            <span>✨</span> Premium Destinations
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Explore Best Travel Places</h2>
          <p className="text-base text-gray-600 max-w-xl">
            Discover handpicked luxury destinations with exclusive experiences tailored for your perfect getaway
          </p>
        </div>
        <button className="border border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-5 py-2.5 rounded-full text-sm font-medium transition self-start sm:self-auto">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <div key={dest.name} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 flex gap-1">
                {dest.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="bg-white/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{dest.name}</h3>
                <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                  <Star size={14} className="text-secondary fill-secondary" />
                  <span className="text-sm font-semibold text-gray-800">{dest.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin size={14} />
                <span className="truncate">{dest.location}</span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{dest.days} days</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span>{dest.maxPeople} max</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div>
                  <span className="text-xs text-gray-500">From</span>
                  <p className="text-lg font-bold text-primary">AED {dest.price}</p>
                  <span className="text-xs text-gray-500">/person</span>
                </div>
                <button className="bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}