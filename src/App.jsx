import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
