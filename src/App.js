import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FaWhatsapp } from "react-icons/fa6";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="relative">
      <div className="w-[100%] backdrop-blur-sm shadow-sm fixed z-50 ">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <div className=" fixed bottom-10  right-10 rounded-full text-white p-2 bg-green-500">
        <a href="https://wa.me/+918865938263" target="_blank" className="">
          <FaWhatsapp className="text-2xl " />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
