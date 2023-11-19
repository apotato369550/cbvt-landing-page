import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Careers from "./components/Careers"
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <AboutUs></AboutUs>
      <Services></Services>
      <Careers></Careers>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  )
}

export default App
