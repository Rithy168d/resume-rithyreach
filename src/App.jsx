import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Skill } from "./pages/Skill";
import Service from "./pages/Services";
import Qualification from "./pages/Qualification";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container-width">
        <main className="margin-1">
          <Home />
          <About />
          <Skill />
          <Service />
          <Qualification />
          <Portfolio />
          <Testimonial />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
