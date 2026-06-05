import {
Navbar,
Hero,
TravelPlaces,
Services,
PopularDestinations,
WhyChooseUs,
Testimonials,
FAQ,
Contact,
Footer,
} from './homepage';

export default function App() {
return (
  <div className="min-h-screen bg-white">
    <Navbar />
    <Hero />
    <TravelPlaces />
    <Services />
    <PopularDestinations />
    <WhyChooseUs />
    <Testimonials />
    <FAQ />
    <Contact />
    <Footer />
  </div>
);
}