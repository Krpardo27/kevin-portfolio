import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen container mx-auto w-full">
      <Header />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            Loading...
          </div>
        }
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
