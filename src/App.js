import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Review from './components/Review';
import TopDestination from './components/TopDestination';
import Footer from './components/Footer';


function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Cards />
        <TopDestination/>
        <Review />
        <Footer/>
    </>
  );
}

export default App;