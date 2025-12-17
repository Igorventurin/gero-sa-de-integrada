import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Professionals from './components/sections/Professionals';
import ProblemContext from './components/sections/ProblemContext';
import Approach from './components/sections/Approach';
import Services from './components/sections/Services';
import Differentials from './components/sections/Differentials';
import Evidence from './components/sections/Evidence';
import Research from './components/sections/Research';
import ContentWindow from './components/sections/ContentWindow';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <About />
        <Professionals />
        <ProblemContext />
        <Approach />
        <Services />
        <Differentials />
        <ContentWindow />
        <Research />
        <Evidence />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App;
