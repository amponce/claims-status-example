/**
 * VA Application Template - Header Component
 * 
 * This component implements the standard VA header using VA Design System components.
 * It provides the minimal header variant with customizable title.
 * 
 * @file header.jsx
 * @version 1.0.0
 */

import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";

/**
 * Standard VA header component
 * Implements VA header and navigation patterns using VA Design System
 * @returns {React.ReactElement} The Header component
 */
const Header = () => {
  return (
    <header id="header">
      {/* Accessibility: Skip navigation link */}
      <a className="show-on-focus" href="#main-content">
        Skip to Content
      </a>
      
      {/* VA Design System header component */}
      <va-header-minimal
        header="VA Application Template"
        subheader=""
        disable-headings="true"
        role="banner"
        class="hydrated"
      />
    </header>
  );
};

export default Header;
