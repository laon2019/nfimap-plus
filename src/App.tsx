import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import NfititTestFlow from './pages/Nfiti/NfitiTestFlow';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nfiti" element={<NfititTestFlow />} />
      </Routes>
    </Layout>
  );
}

export default App;
