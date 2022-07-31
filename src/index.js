//import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react";

//import reportWebVitals from './reportWebVitals';

import './index.css';
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/Forgot Password";
import ResetPassword from "./pages/Auth/Reset Password";
import Product from "./pages/Product";
import AddProduct from "./pages/Add Product";
import NotFound from "./pages/404";
import EditProduct from "./pages/Edit Product";
import AddPromo from "./pages/Add Promo";
import EditPromo from "./pages/Edit Promo";
import ProductDetail from "./pages/Product Detail";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Dashboard";
import { PrivateNotLoggedIn, PrivateLoggedIn } from "./component/privateRoute";

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/editproduct/:id" element={<EditProduct />} />
            <Route path="/addpromo" element={<AddPromo />} />
            <Route path="/editpromo/:id" element={<EditPromo />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/product/detail/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
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
            <Route path="/dashboard" element={
              <PrivateNotLoggedIn redirectedTo="/login">
                <Dashboard />
              </PrivateNotLoggedIn>} />
          </Routes>
        </Router>
      </PersistGate>
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
