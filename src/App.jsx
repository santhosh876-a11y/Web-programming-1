import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PCBuilder from './pages/PCBuilder';
import SavedConfigurations from './pages/SavedConfigurations';
import CompareBuilds from './pages/CompareBuilds';
import BuildSummary from './pages/BuildSummary';
import { BuilderProvider, useBuilder } from './context/BuilderContext';

// Helper component to scroll to top on page navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global Toast notification toast renderer
const ToastBanner = () => {
  const { toastMessage } = useBuilder();
  if (!toastMessage) return null;

  const bgClass =
    toastMessage.type === 'danger'
      ? 'bg-danger text-white'
      : toastMessage.type === 'warning'
      ? 'bg-warning text-dark'
      : toastMessage.type === 'info'
      ? 'bg-info text-dark'
      : 'bg-success text-white';

  return (
    <div className="custom-toast-container">
      <div className={`toast show align-items-center ${bgClass} border-0 shadow-lg`} role="alert">
        <div className="d-flex p-3 align-items-center">
          <div className="toast-body p-0 fw-semibold">
            {toastMessage.message}
          </div>
        </div>
      </div>
    </div>
  );
};

const AppContent = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<PCBuilder />} />
          <Route path="/saved" element={<SavedConfigurations />} />
          <Route path="/compare" element={<CompareBuilds />} />
          <Route path="/summary" element={<BuildSummary />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ToastBanner />
    </div>
  );
};

function App() {
  return (
    <BuilderProvider>
      <Router>
        <AppContent />
      </Router>
    </BuilderProvider>
  );
}

export default App;
