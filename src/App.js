import './App.scss';
import FirstSection from './components/first-section';
import Services from './components/services';
import WhyChooseUS from './components/why-choose-us';
import Testimonial from './components/testimonial';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <FirstSection />
      <Services />
      <WhyChooseUS />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
