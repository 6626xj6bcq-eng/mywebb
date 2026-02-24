
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timelines from './components/Timelines';
import GridSections from './components/GridSections';
import Footer from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen jungle-bg selection:bg-green-500/30">
      <Header />
      <main className="overflow-hidden">
        <ScrollReveal direction="none" duration={1}>
          <Hero />
        </ScrollReveal>
        
        <ScrollReveal direction="up" duration={0.8} scale>
          <About />
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.8}>
          <Timelines />
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.8}>
          <GridSections />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default App;
