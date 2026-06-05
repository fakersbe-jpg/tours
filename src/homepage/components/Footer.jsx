import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = {
company: [
  { name: 'About Us', href: '#about' },
  { name: 'Our Services', href: '#services' },
  { name: 'Careers', href: '#' },
  { name: 'Blog', href: '#' },
],
support: [
  { name: 'Contact Us', href: '#contact' },
  { name: 'FAQs', href: '#faq' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
],
destinations: [
  { name: 'Dubai', href: '#tours' },
  { name: 'Abu Dhabi', href: '#tours' },
  { name: 'Sharjah', href: '#tours' },
  { name: 'Riyadh', href: '#tours' },
],
};

export default function Footer() {
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

return (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-6">
          <a href="#home" className="flex items-center gap-2">
            <img
              src="https://rwampsglobaltoursconsult.com/assets/RWAMPS%20logo-1-CSrZdRkz.svg"
              alt="Rwamps Logo"
              className="h-10 w-auto brightness-0 invert"
            />
          </a>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Your trusted partner for unforgettable travel experiences across the UAE and beyond. We make every journey memorable.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <MapPin size={16} className="text-primary shrink-0" />
              <span>Dubai Marina, Al Marsa Street, Building 12, Floor 8</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Phone size={16} className="text-primary shrink-0" />
              <span>+971 4 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Mail size={16} className="text-primary shrink-0" />
              <span>support@traveluae.com</span>
            </div>
          </div>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-3">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h4>
          <ul className="space-y-3">
            {footerLinks.support.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Destinations</h4>
          <ul className="space-y-3">
            {footerLinks.destinations.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; 2024 Rwamps Global Tours Consult. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </div>
  </footer>
);
}