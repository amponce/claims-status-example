/**
 * VA Application Template - Footer Component
 * 
 * This component implements the standard VA footer using VA Design System components.
 * It uses the minimal footer variant for simplicity.
 * 
 * @file footer.jsx
 * @version 1.0.0
 */

import React from "react";

/**
 * Standard VA footer component using VA Design System
 * @returns {React.ReactElement} The Footer component
 */
const Footer = () => {
  return (
    <footer>
      {/* VA Design System footer component */}
      <va-minimal-footer></va-minimal-footer>
    </footer>
  );
};

export default Footer;
