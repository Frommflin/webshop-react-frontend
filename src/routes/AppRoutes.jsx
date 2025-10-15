import Account from "@/pages/Account/Account.page";
import Checkout from "@/pages/Checkout/Checkout.page";
import CustomerCart from "@/pages/CustomerCart/CustomerCart.page";
import Home from "@/pages/Home/Home.page";
import Login from "@/pages/Login/Login.page";
import ProductDetails from "@/pages/ProductDetails/ProductDetails.page";
import Products from "@/pages/Products/Products.page";
import Register from "@/pages/Register/Register.page";
import Layout from "@/templates/Layout.template";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/signin"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/account"
        element={
          <Layout>
            <Account />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <CustomerCart />
          </Layout>
        }
      />
      <Route
        path="/checkout"
        element={
          <Layout>
            <Checkout />
          </Layout>
        }
      />
      <Route
        path="/products"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />
      <Route
        path="/product/:id"
        element={
          <Layout>
            <ProductDetails />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
