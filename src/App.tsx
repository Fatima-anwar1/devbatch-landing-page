
import Navbar from './components/navbar';
import Hero from './components/hero'; // Ye import add karo
import Slider from './components/slider';
import Cards from './components/cards';
import About from './components/about';    
import Contact from './components/contact'; 
import Footer from './components/footer'; // Footer bhi add karlo

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-900 text-white">
      
      <Navbar />
      <Slider />  {/* Navbar sabse upar */}
      <Hero />    {/* Phir Hero section */}
      
      <About />   {/* About section */}
      <Cards />   {/* Cards section */}
      <Contact /> {/* Contact section */}
      <Footer />  {/* Footer */}
      
    </div>
  );
}