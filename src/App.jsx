import React, { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Router>
        <Header />
          <Routes>
              
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                
              
              

        </Routes>
        <Footer />
      </Router>
      
      
      <Toaster />
    </div>
  );
}

export default App;