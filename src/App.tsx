import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import LiveData from './sections/LiveData';
import Formations from './sections/Formations';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-blue-deep text-gray-metal">
      <Navbar />
      <main className="pt-20"> {/* Wrapper principal avec padding-top */}
        <Hero />
        <Services />
        <LiveData />
        <Formations />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;