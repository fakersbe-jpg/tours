import { Plane, Users, Shield, MapPin } from 'lucide-react';

const reasons = [
{
  number: '01',
  title: 'Travel Plan',
  description: 'Personalized itineraries designed to match your unique travel style and preferences.',
  icon: Plane,
},
{
  number: '02',
  title: 'Expert Guides',
  description: 'Knowledgeable local guides to enhance your experience with insider tips and stories.',
  icon: Users,
},
{
  number: '03',
  title: '24/7 Support',
  description: 'Round-the-clock assistance to ensure your journey is smooth and worry-free.',
  icon: Shield,
},
{
  number: '04',
  title: 'Best Value',
  description: 'Premium experiences at competitive prices with no hidden fees or charges.',
  icon: MapPin,
},
];

export default function WhyChooseUs() {
return (
  <section id="about" className="py-16 lg:py-20 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us ?</h2>
            <p className="text-base text-gray-600">
              We make your travel dreams a reality with exceptional service and attention to detail
            </p>
          </div>

          <div className="space-y-6">
            {reasons.map((reason) => (
              <div key={reason.number} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                  <reason.icon size={22} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">{reason.number}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-gray-600">Happy Travelers</p>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-gray-600">Destinations</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-full border-8 border-primary-light overflow-hidden">
              <img
                src="https://rwampsglobaltoursconsult.com/assets/bg_image-DoHP6FS-.png"
                alt="Travel Experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Plane size={24} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}