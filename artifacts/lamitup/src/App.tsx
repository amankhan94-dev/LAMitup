import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import Results from '@/components/Results';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function Home() {
  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <WhyUs />
      <Results />
      <Industries />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
