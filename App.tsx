import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import ReportLostForm from './components/forms/ReportLostForm/ReportLostForm';
import ReportFoundForm from './components/forms/ReportFoundForm/ReportFoundForm';
import Browse from './components/Browse/Browse';
import TimelinePage from './components/TimelinePage/TimelinePage';

import AboutMe from "./pages/AboutMe/AboutMe";
import PremiumPage from './pages/PremiumPage/PremiumPage';





// ✅ Protected Route component
interface ProtectedRouteProps {
  isLoggedIn: boolean;
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  // ✅ Auth state persisted in localStorage
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* 🌐 Public Routes */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="browse" element={<Browse />} />
        <Route path="timeline" element={<TimelinePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/premium" element={<PremiumPage />} />



        
<Route path="/about" element={<AboutMe />} />

        {/* 🔐 Auth Routes */}
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

        {/* 🚫 Protected Routes */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="report-lost"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ReportLostForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="report-found"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ReportFoundForm />
            </ProtectedRoute>
          }
        />

        {/* ⚙️ Catch-all Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
