import Account from "@/pages/Account/Account.page";
import Checkout from "@/pages/Checkout/Checkout.page";
import CustomerCart from "@/pages/CustomerCart/CustomerCart.page";
import Home from "@/pages/Home/Home.page";
import Login from "@/pages/Login/Login.page";
import ProductDetails from "@/pages/ProductDetails/ProductDetails.page";
import Products from "@/pages/Products/Products.page";
import Register from "@/pages/Register/Register.page";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/signin" element={<Login />} />
      <Route exact path="/account" element={<Account />} />
      <Route exact path="/cart" element={<CustomerCart />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
