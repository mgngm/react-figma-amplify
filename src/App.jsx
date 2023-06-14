import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Home from './Components/Home';
import Labs from './Components/Labs';
import Footer from './Components/Footer';
import AuthComponent from './Components/AuthComponent';
import ApiComponent from './Components/ApiComponent';
import OAuthComponent from './Components/OAuthComponent';
import Expense from './Components/Expenses';
import StorageComponent from './Components/StorageComponent';

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
          <Route path="/login" element={<AuthComponent />} />
          <Route path="/auth" element={<OAuthComponent />} />
          <Route path="/api" element={<ApiComponent />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/storage" element={<StorageComponent />} />
          <Route path="/analytics" element={<PlaceHolderComp title={"Amplify Analytics"} />} />
          <Route path="/functions" element={<PlaceHolderComp title={"Amplify Functions"} />} />
          <Route path="/pubsub" element={<PlaceHolderComp title={"Amplify PubSub"} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}



function PlaceHolderComp({ title }) {
  return (
    <div className="flex flex-col items-center gap-8 w-full relative pt-24">
      <div className="flex flex-col gap-10 sm:gap-14 items-center">
        <div className="md:text-center px-2 w-80 sm:w-fit">
          <h2 className="text-5xl font-bold text-yellow-400">{`${title}`}</h2>
          <h2 className="text-1xl pt-4 dark:text-white">{`${title} is currently under construction`}</h2>
        </div>

        <div className="flex flex-col gap-4 items-center">
          {/* Main conentent here */}
        </div>
      </div>
    </div>
  );
}
