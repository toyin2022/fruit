import React from "react";
import TopNavbar from "./components/topNavbar";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Category from "./components/category";
import Organic from "./components/organicProducts";
import Footer from "./components/footer";
import FreshOrganic from "./components/freshOrganic";
import Exotic from "./components/exotic";
import BestSeller from "./components/bestSeller";
import Customers from "./components/customer";
import Testimonials from "./components/testimonials";

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Hero />
      <Features />
      <Organic />
      <Category />
      <FreshOrganic />
      <Exotic />
      <BestSeller />
      <Customers />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
