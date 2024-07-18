import "./App.css";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import CardsSection from "./components/CardsSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ReservationForm from "./components/ReservationForm";

function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <ReservationForm />
      <CardsSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
