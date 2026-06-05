import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
{
  name: 'Khalif Muhammad',
  title: 'CEO, XYZ Company',
  rating: 5.0,
  quote: 'They took care of everything from transport to accommodations, making the whole trip completely stress-free and thoroughly enjoyable. The attention to detail was exceptional!',
  image: 'https://rwampsglobaltoursconsult.com/assets/user_one-CWCMHY8k.png',
},
{
  name: 'Sarah Johnson',
  title: 'Marketing Director, TechCorp',
  rating: 5.0,
  quote: 'An unforgettable experience! The tour guides were knowledgeable, the itinerary was perfectly planned, and every moment felt special. Highly recommended for anyone seeking adventure.',
  image: 'https://rwampsglobaltoursconsult.com/assets/user_two-BOwF-0uc.png',
},
{
  name: 'Robert Chen',
  title: 'Senior Engineer, Innovate Labs',
  rating: 5.0,
  quote: "The best travel experience of my life. From booking to departure, everything was seamless. The team's professionalism and dedication made our family vacation perfect.",
  image: 'https://rwampsglobaltoursconsult.com/assets/user_three-BBGg2ndS.png',
},
];

const stats = [
{ value: '98%', label: 'Customer Satisfaction' },
{ value: '5K+', label: 'Happy Travelers' },
{ value: '150+', label: 'Destinations' },
{ value: '24/7', label: 'Support Available' },
];

export default function Testimonials() {
const [active, setActive] = useState(0);

return (
  <section className="py-16 lg:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-2">
        <span className="text-sm font-semibold text-primary tracking-wider uppercase">
          What Our Travelers Say
        </span>
        <h2 className="text-3xl font-bold text-gray-900">What Our Travelers Say</h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Hear from our satisfied customers about their unforgettable journeys
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Quote size={16} className="text-white" />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-secondary fill-secondary" />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-800">
                  {testimonials[active].rating}
                </span>
              </div>
              <p className="text-base text-gray-700 leading-relaxed italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div>
                <p className="text-lg font-semibold text-gray-900">{testimonials[active].name}</p>
                <p className="text-sm text-gray-500">{testimonials[active].title}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === active ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center space-y-1">
            <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}