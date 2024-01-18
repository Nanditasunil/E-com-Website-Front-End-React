import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";

import Category from "./components/Category/Category"; //  New arrivals
import CategoriesList from "./components/Home/CategoriesList/CategoriesList";
import AboutUsComp from "./components/Home/AboutUs/AboutUsComp";

import HooodieCat from "./components/Category/HoodieCat";
import TshirtCat from "./components/Category/TshirtsCat";
import SocksCat from "./components/Category/SocksCat";
import VarsityCat from "./components/Category/VarsityCat";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="./components/Home/AboutUs/AboutUsComp"
            element={<AboutUsComp />}
          />
        </Routes>
        <AboutUsComp />
        <Category />
        <CategoriesList />

        <HooodieCat />
        <TshirtCat />
        <SocksCat />
        <VarsityCat />
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}
export default App;
