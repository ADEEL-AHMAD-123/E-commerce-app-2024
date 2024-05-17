import React, { useState } from "react";
import { useSelector } from "react-redux";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import OurStore from "./pages/ourStore";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SingleBlog from "./pages/SingleBlog";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/profile";
import ShippingForm from "./pages/ShippingPage";
import UserStatus from "./pages/status";
import ProtectedRoute from "./pages/protectedRoute";
import ConfirmOrderPage from "./pages/ConfirmOrder";
import ProductForm from "./components/ProductForm";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./components/NotFound";
import OrderSuccess from "./pages/OrderScucces";
const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  console.log(isAuth, "auth");
  console.log('All cookies:', document.cookie);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="store" element={<OurStore />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="compare-products" element={<CompareProducts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="shipping" element={<ShippingForm />} />
          <Route path="confirm-order" element={<ConfirmOrderPage />} />
          <Route path="product/create" element={<ProductForm />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="order/success" element={<OrderSuccess />} />
          <Route path="*" element={<NotFound />} />
          <Route path="profile" element={<Profile />} />

          {/* protected routes */}

          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
