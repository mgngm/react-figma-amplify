import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Home from './Components/Home';
import Labs from './Components/Labs';
import Footer from './Components/Footer';
import AuthComponent from './Components/AuthComponent';
import ApiComponent from './Components/ApiComponent';

function Index() {
  return (
    <>
      <Hero />
      <Home />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col gap-24">
        <header className="h-2 sm:h-5">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/auth" element={<AuthComponent />} />
          <Route path="/api" element={<ApiComponent />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}