import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, Mail, CheckCircle, Clock, HelpCircle, Shield } from 'lucide-react';

const faqs = [
{
  question: 'HOW DO I BOOK A TOUR PACKAGE?',
  category: 'Booking',
  answer: 'You can book directly through our website, contact our support team, or visit our physical offices. Online booking is available 24/7 with instant confirmation.',
},
{
  question: 'WHAT PAYMENT METHODS DO YOU ACCEPT?',
  category: 'Payment',
  answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cash payments at our offices. All transactions are secure and encrypted.',
},
{
  question: 'CAN I CANCEL OR MODIFY MY BOOKING?',
  category: 'Booking',
  answer: 'Yes, you can cancel or modify your booking up to 48 hours before departure. Some premium packages may have different cancellation policies which will be clearly stated during booking.',
},
{
  question: 'DO YOU PROVIDE TRAVEL INSURANCE?',
  category: 'Travel',
  answer: 'We offer comprehensive travel insurance as an add-on during booking. It covers medical emergencies, trip cancellations, lost luggage, and other travel-related incidents.',
},
{
  question: 'WHAT DOCUMENTS DO I NEED FOR INTERNATIONAL TOURS?',
  category: 'Travel',
  answer: "Typically you'll need a valid passport with at least 6 months validity, visa (if required), travel insurance, and vaccination certificates. Our team will provide a detailed checklist based on your destination.",
},
{
  question: 'ARE FLIGHTS INCLUDED IN THE TOUR PACKAGES?',
  category: 'General',
  answer: "Most of our international packages include return flights. Domestic tours usually include transport but not flights. Package details clearly specify what's included. You can also opt for land-only packages.",
},
{
  question: 'HOW DO GROUP DISCOUNTS WORK?',
  category: 'Payment',
  answer: 'We offer special rates for groups of 6 or more people. Discounts range from 10-25% depending on group size and package. Contact our group booking department for customized quotes.',
},
{
  question: 'WHAT HAPPENS IN CASE OF BAD WEATHER?',
  category: 'Travel',
  answer: 'We monitor weather conditions closely. If activities are cancelled due to bad weather, we offer alternative experiences or refunds for the affected portions. Safety is our top priority.',
},
];

const faqStats = [
{ icon: CheckCircle, value: '98%', label: 'Satisfaction Rate' },
{ icon: Clock, value: '15min', label: 'Avg. Response Time' },
{ icon: HelpCircle, value: '2.5K+', label: 'Questions Answered' },
{ icon: Shield, value: '24/7', label: 'Support Available' },
];

export default function FAQ() {
const [openIndex, setOpenIndex] = useState(0);

return (
  <section id="faq" className="py-16 lg:py-20 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-2">
        <span className="text-sm font-semibold text-primary tracking-wider uppercase">
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl font-bold text-gray-900">Find Answers to Your Questions</h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about booking, payments, travel requirements, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-primary bg-primary-light px-2 py-1 rounded-lg">
                    {faq.category}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">{faq.question}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-gray-500 shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed pl-[calc(0.5rem+60px)]">
                    {faq.answer}
                  </p>
                  <div className="flex items-center gap-4 mt-3 pl-[calc(0.5rem+60px)]">
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      <CheckCircle size={12} />
                      Verified answer
                    </span>
                    <span className="text-xs text-gray-500">Helpful for 95% of users</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-2xl p-8 text-white space-y-6">
            <h3 className="text-xl font-bold">Need More Help?</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <MessageCircle size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Live Chat</p>
                  <p className="text-xs text-gray-400">24/7 instant support</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">+971 4 123 4567</p>
                  <p className="text-xs text-gray-400">Phone Support</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">support@traveluae.com</p>
                  <p className="text-xs text-gray-400">Email Support</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors">
              Contact Support Team
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {faqStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-4 text-center space-y-1">
                <stat.icon size={20} className="text-primary mx-auto" />
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
}