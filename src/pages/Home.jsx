import React from "react";
import Layout from "../components/layout";
import { Link } from "react-router-dom";

/**
 * Home page template for VA applications
 */
const HomePage = () => {
  return (
    <Layout title="VA Application Template">
      <va-alert
        close-btn-aria-label="Close notification"
        status="info"
        visible
        class="vads-u-margin-bottom--4"
      >
        <h2
          id="welcome-alert-headline"
          slot="headline"
        >
          Welcome to the VA Application Template
        </h2>
        <p className="vads-u-margin-y--0">
          This template provides a starting point for building VA applications
          using the official VA Design System and Web Components.{' '}
          <va-link
            href="/components"
            text="View component examples"
          />
          {' '}to see what's available.
        </p>
      </va-alert>

      <div className="vads-l-row">
        <div className="vads-l-col--12 medium-screen:vads-l-col--8">
          <h2>Getting Started</h2>
          <p>
            This template includes examples of common patterns for VA applications,
            including form patterns, component usage, and accessibility best practices.
          </p>

          <h3>Included Examples:</h3>
          <ul>
            <li>
              <Link to="/claims-tracker">VA Claims Status Tracker</Link> - Track your claims and upload supporting documents
            </li>
            <li>
              <Link to="/example-form">Example Form</Link> - A sample form using VA form components
            </li>
            <li>
              <Link to="/components">Components</Link> - A showcase of VA components
            </li>
            <li>
              <Link to="/about">About</Link> - Information about this template
            </li>
            <li>
              <Link to="/landing-template">Landing Page Template</Link> - Full-width landing page example
            </li>
          </ul>
        </div>

        <div className="vads-l-col--12 medium-screen:vads-l-col--4">
          <va-card class="vads-u-margin-top--2">
            <h2 slot="headline">Resources</h2>
            <div>
              <ul className="vads-u-padding-left--2">
                <li>
                  <a href="https://design.va.gov/" target="_blank" rel="noopener noreferrer">
                    VA Design System
                  </a>
                </li>
                <li>
                  <a href="https://department-of-veterans-affairs.github.io/component-library/" target="_blank" rel="noopener noreferrer">
                    VA Web Components
                  </a>
                </li>
                <li>
                  <a href="https://design.va.gov/patterns/" target="_blank" rel="noopener noreferrer">
                    Design Patterns
                  </a>
                </li>
              </ul>
            </div>
          </va-card>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
