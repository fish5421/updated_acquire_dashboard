import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ErrorBoundary from './components/ErrorBoundary';
import { DashboardProvider, DashboardContext } from './context/DashboardContext';
import { TooltipProvider } from './components/ui/tooltip';
import './index.css';

import Dashboard from './components/Dashboard';
import FileManagement from './components/FileManagement';

import { AnimatePresence, motion } from 'framer-motion';

const Layout = ({ children }) => (
  <div className="flex h-screen bg-white">
    <Sidebar />
    <main className="flex-1 overflow-x-hidden overflow-y-auto">
      {children}
    </main>
  </div>
);

// Component to handle conditional redirect on initial load
function ConditionalRedirect() {
  const { selectedFileIds } = useContext(DashboardContext);

  // If no files have been selected, redirect to file-management
  // This ensures first-time visitors land on file management
  if (selectedFileIds.length === 0) {
    return <Navigate to="/file-management" replace />;
  }

  return <Dashboard />;
}

function AnimatedRoutes() {
  const location = useLocation();

  // Wrap routes in AnimatePresence for page transitions
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Routes location={location}>
          {/*
            If user has no uploaded files, they get redirected to /file-management automatically.
            Otherwise, show Dashboard.
          */}
          <Route path="/" element={<ConditionalRedirect />} />
          <Route path="/file-management" element={<FileManagement />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Router>
          <DashboardProvider>
            <div className="App">
              <Layout>
                <AnimatedRoutes />
              </Layout>
            </div>
          </DashboardProvider>
        </Router>
      </TooltipProvider>
    </ErrorBoundary>
  );
}