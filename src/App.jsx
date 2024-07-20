import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
