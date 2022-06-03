import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import reportWebVitals from './reportWebVitals';

import './index.css';
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/Forgot Password";
import Product from "./pages/Product";
import ProductDetail from "./pages/Product Detail";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Payment from "./pages/Payment";

function App(){
  return(
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:favorite" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/history" element={<History />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//reportWebVitals();
