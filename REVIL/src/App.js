import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
// import Product from "./Components/Product";
import Sidebar from "./Components/Dashboard/SideBarSection/Sidebar";
import ProductScreen from "./Screens/ProductScreen";

const App= () => {
  return (
    <Router>
      {/* <div className="container">
        <Sidebar/>
        <Product/>
      </div> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductScreen/>}/>
        <Route
          path="/dashboard/*"
          element={
            <div className="container">
              <Dashboard />
              {/* <Product/> */}
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;
