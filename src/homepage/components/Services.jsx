import { Headphones, CalendarCheck, Car, Globe } from 'lucide-react';

const services = [
{
  icon: Headphones,
  title: '24/7 SUPPORT',
  description: 'While using our services, you are assured of 24/7 quality customer support.',
},
{
  icon: CalendarCheck,
  title: 'EASY BOOKING',
  description: 'Our booking and check out process is easy and aimed at fitting your uniques needs and concerns.',
},
{
  icon: Car,
  title: 'FREE TRANSPORT',
  description: 'Our tour services include a quality and comfortable transport medium ranging from flights to luxury cars.',
},
{
  icon: Globe,
  title: 'ALL CURRENCIES SUPPORTED',
  description: 'We accept all currencies and transaction rates are pegged on global forex prices.',
},
];

export default function Services() {
return (
  <section id="services" className="py-16 lg:py-20 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive travel services to make your journey unforgettable
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto">
              <service.icon size={28} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}