import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills"; 
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Footer />
    </div>
  );
}

export default App;
