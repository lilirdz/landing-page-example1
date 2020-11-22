import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar"
import Footer from  "./components/Footer"
import ContactForm from "./components/ContactForm"
import Hero from "./components/Hero"
import OurServices from "./components/OurServices"
import DifferentSection from "./components/DifferentSection"
import Team from "./components/Team"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
      <Hero />
      <OurServices />
      <DifferentSection />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
