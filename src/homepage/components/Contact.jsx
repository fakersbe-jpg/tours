import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
return (
  <section id="contact" className="py-16 lg:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-2">
        <span className="text-sm font-semibold text-primary tracking-wider uppercase">
          We're Here to Help
        </span>
        <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to our team and we'll get back to you promptly
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone Support</h3>
                <p className="text-sm text-gray-600">+971 4 123 4567</p>
                <p className="text-xs text-gray-500 mt-1">Sunday - Thursday, 8:00 AM - 8:00 PM GST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                <Mail size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                <p className="text-sm text-gray-600">contact@traveluae.com</p>
                <p className="text-xs text-gray-500 mt-1">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Office Address</h3>
                <p className="text-sm text-gray-600">
                  Dubai Marina, Al Marsa Street, Building 12, Floor 8, Dubai, United Arab Emirates
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                <Clock size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                <p className="text-sm text-gray-600">8:00 AM - 8:00 PM</p>
                <p className="text-xs text-gray-500 mt-1">Sunday to Thursday (Closed Friday & Saturday)</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-900">Follow Us</p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-700 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-700 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-700 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-700 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none cursor-pointer">
                <option>General Inquiry</option>
                <option>Booking Support</option>
                <option>Group Tours</option>
                <option>Feedback</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm text-gray-700 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
}