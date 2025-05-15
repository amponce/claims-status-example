/**
 * VA Application Template - Main App Component
 * 
 * This is the main application component that sets up routing and error handling.
 * It defines the main routes for the application and wraps everything in the
 * necessary providers.
 * 
 * @file App.jsx
 * @version 1.0.0
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Error provider removed as per cleanup request
import "./styles.css";

// Import template pages - these serve as examples that can be modified or replaced
import HomePage from "./pages/Home";
import ExampleFormPage from "./pages/ExampleForm";
import ComponentsPage from "./pages/Components";
import AboutPage from "./pages/About";
import LandingPageTemplate from "./pages/LandingPageTemplate";
import ClaimsTracker from "./pages/ClaimsTracker";

/**
 * Main App component for the VA Application Template
 * Provides routing and error handling for all pages
 */
function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* Main application routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/example-form" element={<ExampleFormPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/landing-template" element={<LandingPageTemplate />} />
          <Route path="/claims-tracker" element={<ClaimsTracker />} />
          {/* Add additional routes as needed for your application */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
