import Hero from './Components/hero/Hero';
import Programs from './Components/programs/Programs';
import './App.css';
import Reasons from './Components/reasons/Reasons';
import Plans from './Components/plans/Plans';
import Testimonials from './Components/testimonials/Testimonials';
import Join from './Components/join/Join';
import Footer from './Components/footer/Footer'

function App() {
  return (

    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>


  );
}

export default App;
