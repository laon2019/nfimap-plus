import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Nfiti from './pages/Nfiti';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nfiti" element={<Nfiti />} />
      </Routes>
    </Layout>
  );
}

export default App;
