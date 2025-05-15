/**
 * VA Application Template - Main Entry Point
 * 
 * This is the main entry file for the VA Application Template.
 * It initializes the VA web components and renders the main App component.
 * 
 * @file main.jsx
 * @version 1.0.0
 */

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  applyPolyfills,
  defineCustomElements,
} from "@department-of-veterans-affairs/component-library";

import App from "./App";
import "./styles.css";

// Initialize VA web components
// This step is required to use VA Design System web components
applyPolyfills().then(() => {
  defineCustomElements(window);
});

// Create root element for React rendering
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Render the application inside StrictMode for additional development checks
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
