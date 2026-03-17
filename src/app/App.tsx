import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { Services } from './components/Services';
import { AboutDoctor } from './components/AboutDoctor';
import { Location } from './components/Location';
import { Testimonials } from './components/Testimonials';
import { EmergencyCTA } from './components/EmergencyCTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustBadges />
      <Services />
      <AboutDoctor />
      <Location />
      <Testimonials />
      <EmergencyCTA />
      <Footer />
      <FloatingActions />
    </div>
  );
}
