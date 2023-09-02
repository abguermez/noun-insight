import "./App.css";
import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import { useState, useRef, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [isIntersectingHome, setIsIntersectingHome] = useState(false);
  const [isIntersectingAbout, setIsIntersectingAbout] = useState(false);
  const [isIntersectingServices, setIsIntersectingServices] = useState(false);
  const [isIntersectingContact, setIsIntersectingContact] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    const homeObserver = new IntersectionObserver(
      ([entry]) => {
        // setIsIntersecting(entry.isIntersecting);
        setIsIntersectingHome(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        // setIsIntersecting(entry.isIntersecting);
        setIsIntersectingAbout(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        // setIsIntersecting(entry.isIntersecting);
        setIsIntersectingServices(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        // setIsIntersecting(entry.isIntersecting);
        setIsIntersectingContact(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    homeObserver.observe(homeRef.current);
    aboutObserver.observe(aboutRef.current);
    servicesObserver.observe(servicesRef.current);
    contactObserver.observe(contactRef.current);
    return () => {
      homeObserver.disconnect();
      aboutObserver.disconnect();
    };
  }, [
    isIntersectingHome,
    isIntersectingAbout,
    isIntersectingServices,
    isIntersectingContact,
  ]);
  const intersectings = [
    isIntersectingHome,
    isIntersectingAbout,
    isIntersectingServices,
    isIntersectingContact,
  ];
  return (
    <div id="first-section" className=" w-full flex flex-col bg-blue-50">
      <NavBar intersectings={intersectings} />
      <div className="flex flex-col max-md:pt-5 max-md:mt-14">
        <FirstSection refProp={homeRef} />
        <SecondSection refProp={aboutRef} />
        <ThirdSection refProp={servicesRef} />
        <FourthSection refProp={contactRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
