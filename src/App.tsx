import React, { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Loading from './pages/Loading';

// Lazy load the page components
const Home = lazy(() => import('./pages/Home'));
const NfititTestFlow = lazy(() => import('./pages/Nfiti/NfitiTestFlow'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading /> }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nfiti" element={<NfititTestFlow />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
