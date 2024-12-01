import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import NfititTestFlow from './pages/Nfiti/NfitiTestFlow';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nfiti" element={<NfititTestFlow />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
