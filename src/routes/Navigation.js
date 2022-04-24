import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Layout from '../components/Layout';
import Home from '../pages/Home';

const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation;