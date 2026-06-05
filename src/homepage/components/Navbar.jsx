import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
{ name: 'Home', href: '#home' },
{ name: 'About', href: '#about' },
{ name: 'Services', href: '#services' },
{ name: 'Contact', href: '#contact' },
{ name: 'FAQs', href: '#faq' },
{ name: 'Tours', href: '#tours' },
];

export default function Navbar() {
const [mobileOpen, setMobileOpen] = useState(false);

return (
  <nav className="sticky top-0 z-50 bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="https://rwampsglobaltoursconsult.com/assets/RWAMPS%20logo-1-CSrZdRkz.svg"
            alt="Rwamps Logo"
            className="h-10 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Log In
          </button>
          <button className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {mobileOpen && (
      <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="block text-sm font-medium text-gray-700 hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-3 pt-3 border-t border-gray-100">
          <button className="text-sm font-medium text-gray-700">Log In</button>
          <button className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    )}
  </nav>
);
}