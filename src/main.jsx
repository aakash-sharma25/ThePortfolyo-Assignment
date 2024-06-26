import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
    <div className=" max-w-screen-xl mx-auto min-h-[100vh] text-white ">
    <Navbar />
      <App />
      <Footer/>
    </div>
  </BrowserRouter>
    
  </React.StrictMode>
);
