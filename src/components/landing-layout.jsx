/**
 * VA Application Template - Landing Page Layout Component
 * 
 * This is a special layout component for full-width landing pages.
 * It provides the header and footer but without the content width constraints
 * that the standard layout applies.
 * 
 * @file landing-layout.jsx
 * @version 1.0.0
 */

import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import Header from "./header";
import Footer from "./footer";

/**
 * Special layout component for full-width landing pages
 * Provides header and footer without content width constraints
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered in the layout
 * @returns {React.ReactElement} The LandingLayout component
 */
const LandingLayout = ({ children }) => {
  return (
    <div className="vads-u-display--flex vads-u-flex-direction--column vads-u-min-height--viewport">
      {/* Accessibility: Skip navigation */}
      <va-skip-nav anchor="#main-content"></va-skip-nav>
      
      {/* Standard VA header */}
      <Header />
      
      {/* Main content area - no width constraints */}
      <main id="main-content" className="vads-u-flex--1">
        {/* Render the child components directly without containers */}
        {children}
      </main>
      
      {/* Standard VA footer */}
      <Footer />
    </div>
  );
};

export default LandingLayout;
