// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Logistic from "./components/Logistic/Logistic";
import CardSection from "./components/CardSection/CardSection";
import TrackingSection from "./components/TrackingSection/TrackingSection";
import CompanyProject from "./components/CompanyProject/CompanyProject";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Logistic />
      <CardSection />
      <TrackingSection />
      <CompanyProject />
      <Footer />
    </div>
  );
}

export default App;
