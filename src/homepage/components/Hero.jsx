import { Search, MapPin, Calendar, DollarSign } from 'lucide-react';

export default function Hero() {
return (
  <section id="home" className="relative bg-gradient-to-b from-green-50/50 to-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Let's{' '}
              <span className="inline-flex items-center gap-2">
                Travel
                <span className="text-2xl">✈️</span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800">
              Explore the scenery
            </p>
            <p className="text-base text-gray-600 max-w-lg">
              Your adventure begins here. Discover breathtaking destinations and create memories that last a lifetime.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-700 border-0 focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  <option>Select Destination</option>
                  <option>Abu Dhabi</option>
                  <option>Dubai</option>
                  <option>Ajman</option>
                  <option>Fujairah</option>
                  <option>Ras Al Khaimah</option>
                  <option>Umm Al Quwain</option>
                  <option>Sharjah</option>
                </select>
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-700 border-0 focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-700 border-0 focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  <option>Select Budget</option>
                  <option>AED 1000 - 2500</option>
                  <option>AED 2600 - 5000</option>
                  <option>AED 5000 - 7500</option>
                  <option>AED 7500 - 10000</option>
                  <option>AED 10000 - 15000</option>
                  <option>AED 15000 - 20000</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
              <Search size={18} />
              Search Now
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-primary/30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/20 rounded-full" />

          <div className="relative z-10 flex items-center justify-center">
            <div className="relative">
              <img
                src="https://rwampsglobaltoursconsult.com/assets/header-X9LcTuvO.png"
                alt="Travel header"
                className="w-full max-w-md rounded-3xl shadow-2xl"
              />
              <img
                src="https://rwampsglobaltoursconsult.com/assets/tours_one-YHspAtGq.png"
                alt="Tour destination"
                className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl border-4 border-white shadow-lg object-cover"
              />
              <img
                src="https://rwampsglobaltoursconsult.com/assets/tours_two-jnmDaDVi.png"
                alt="Tour destination"
                className="absolute -bottom-4 -left-8 w-28 h-28 rounded-2xl border-4 border-white shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}