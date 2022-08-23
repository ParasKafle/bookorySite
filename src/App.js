import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./components/layouts/Layout";
import HomePage from "./components/home/HomePage";
import Login from "./components/Users/Login";


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;