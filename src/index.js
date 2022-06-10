import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./redux/store"

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
import Dashboard from "./pages/Dashboard";
import { PrivateNotLoggedIn, PrivateLoggedIn } from "./component/privateRoute";

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={
              <PrivateLoggedIn>
                <Register />
              </PrivateLoggedIn>
            } />
            <Route path="/login" element={
              <PrivateLoggedIn>
                <Login />
              </PrivateLoggedIn>
            } />
          <Route path="/profile" element={
              <PrivateNotLoggedIn redirectedTo="/login">
                <Profile />
              </PrivateNotLoggedIn>
            } />
          <Route path="/product/:favorite" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/history" element={
              <PrivateNotLoggedIn redirectedTo="/login">
                <History />
              </PrivateNotLoggedIn>
            } />
          <Route path="/payment" element={
              <PrivateNotLoggedIn redirectedTo="/login">
                <Payment />
              </PrivateNotLoggedIn>
            } />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ReduxProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//reportWebVitals();
