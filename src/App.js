import { Fragment } from 'react';
import React from 'react';
import HomePage from "./page/HomePage";
import About from "./page/About";
import Menu from "./page/Menu";
import BookingPage from "./page/BookingPage";

import {BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Fragment className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservation" element={<BookingPage />}></Route>
          <Route path="/order-online" element={<HomePage />}></Route>
          <Route path="/login" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
};

export default App;
