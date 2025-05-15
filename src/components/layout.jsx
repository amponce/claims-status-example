/**
 * VA Application Template - Layout Component
 * 
 * This is the main layout component for VA applications.
 * It provides a consistent page structure with header, main content area, and footer.
 * The implementation follows VA Design System patterns with a custom max-width.
 * 
 * This component serves as a template that can be used for various page layouts
 * including landing pages, informational pages, and multi-column layouts.
 * 
 * @file layout.jsx
 * @version 1.0.0
 */

import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import Header from "./header";
import Footer from "./footer";
import { Help } from "./help";
import { 
  VaBreadcrumbs
} from "@department-of-veterans-affairs/component-library/dist/react-bindings";

/**
 * Main layout component for VA applications
 * Provides consistent page structure with header, main content area, and footer
 * Implementation follows VA Design System patterns with support for both standard and full-width layouts
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered in the layout
 * @param {string} [props.title="VA Application Template"] - Page title (deprecated, use H1 in page content)
 * @param {boolean} [props.fullWidth=false] - Whether to use full-width layout without content width constraints
 * @returns {React.ReactElement} The Layout component
 */
const Layout = ({ children, title = "VA Application Template", fullWidth = false }) => {
  // Build breadcrumb items based on the title
  const breadcrumbItems = [
    { href: '/', label: 'Home' }
  ];
  
  // Add current page to breadcrumbs if not on home page
  if (title !== "VA Application Template") {
    breadcrumbItems.push({ 
      href: '#current', 
      label: title 
    });
  }

  // Custom style for the content area based on layout type
  // For standard layouts, we apply max-width constraints
  // For full-width layouts, we remove constraints and let content expand fully
  const contentStyle = fullWidth
    ? {
        width: "100%",
        margin: 0,
        padding: 0
      }
    : {
        maxWidth: "100%",
        margin: "0 auto",
        width: "100%"
      };

  return (
    <div className="vads-u-display--flex vads-u-flex-direction--column vads-u-min-height--viewport">
      {/* Accessibility: Skip navigation */}
      <va-skip-nav anchor="#main-content"></va-skip-nav>
      
      {/* Standard VA header */}
      <Header />
      
      {/* Main content area */}
      <main id="main-content" className="vads-u-flex--1">
        <div style={contentStyle}>
          {!fullWidth && (
            <>
              {/* Breadcrumbs navigation - only shown in standard layout */}
              <div className="row vads-u-margin-bottom--0">
                <div className="columns vads-u-padding-x--2 desktop:vads-u-padding-x--0">
                  <VaBreadcrumbs
                    breadcrumbList={breadcrumbItems}
                    label="Breadcrumb"
                  />
                </div>
              </div>
              
              {/* Standard page content with column layout */}
              <article className="row vads-u-margin-top--0 vads-u-padding-top--0">
                <div className="usa-width-two-thirds medium-8 columns vads-u-padding-x--2 desktop:vads-u-padding-x--0">
                  {/* Title is now handled by individual page components */}
                  
                  {/* Render the child components */}
                  {children}
                  
                  {/* Help component for standard VA help information */}
                  <Help />
                </div>
                
                {/* 
                  For two-column layouts, uncomment this section:
                  <div className="usa-width-one-third medium-4 columns vads-u-padding-x--2 desktop:vads-u-padding-x--0">
                    {/* Sidebar content */}
                {/* </div> */}
              </article>
            </>
          )}

          {/* Full-width content - no column constraints */}
          {fullWidth && (
            <>
              {children}
            </>
          )}
        </div>
      </main>
      
      {/* Standard VA footer */}
      <Footer />
    </div>
  );
};

export default Layout;
