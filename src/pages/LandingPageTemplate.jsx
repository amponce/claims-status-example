import React from "react";
import Layout from "../components/layout";

/**
 * Full-Width Landing Page Template
 * 
 * This template demonstrates how to create a full-width landing page using the VA Design System.
 * It includes sections for a hero banner, feature cards, testimonials, statistics, and a contact form.
 */
const LandingPageTemplate = () => {
  return (
    <Layout fullWidth={true}>
      <h1 className="vads-u-font-family--serif vads-u-font-size--h1 vads-u-margin-y--2 vads-u-display--none">
        {/* Visually hidden title for screen readers */}
        Landing Page Title
      </h1>

      {/* All content is now full-width because of the fullWidth layout prop */}
      {/* Hero Section - Full Width */}
      <section className="vads-u-background-color--primary vads-u-color--white vads-u-padding-y--5 vads-u-margin-bottom--5">
          <div className="vads-grid-container">
            <div className="vads-grid-row">
              <div className="vads-grid-col-12 desktop:vads-grid-col-8">
                <h2 className="vads-u-font-family--serif vads-u-font-size--h1 vads-u-margin-top--0">
                  Hero Section Title
                </h2>
                <p className="vads-u-font-size--lg vads-u-margin-bottom--4">
                  Hero section description text goes here.
                </p>
                <va-button 
                  text="Primary Call to Action" 
                  href="#main-content"
                  uswds
                  big
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section id="features" className="vads-u-margin-bottom--6">
          <div className="vads-grid-container">
            <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-text-align--center vads-u-margin-bottom--4">
              Feature Cards Section
            </h2>
            <div className="vads-grid-row vads-u-margin-x--neg2p5">
              {/* Feature Card Template - Repeat as needed */}
              <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                <va-card class="vads-u-height--full">
                  <h3 className="vads-u-font-family--serif vads-u-font-size--h3" slot="headline">
                    Card Title
                  </h3>
                  <p>
                    Card description text goes here.
                  </p>
                  <div slot="actions">
                    <va-button 
                      text="Learn More" 
                      secondary
                    />
                  </div>
                </va-card>
              </div>
              {/* End Feature Card Template */}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="vads-u-background-color--gray-lightest vads-u-padding-y--5 vads-u-margin-bottom--5">
          <div className="vads-grid-container">
            <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-text-align--center vads-u-margin-bottom--4">
              Testimonials Section
            </h2>
            <div className="vads-grid-row vads-u-margin-x--neg2p5">
              {/* Testimonial Template - Repeat as needed */}
              <div className="vads-grid-col-12 tablet:vads-grid-col-4 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                <va-card class="vads-u-height--full">
                  <div className="vads-u-text-align--center">
                    <p className="vads-u-font-style--italic vads-u-margin-bottom--2">
                      "Testimonial quote goes here."
                    </p>
                    <p className="vads-u-font-weight--bold vads-u-margin--0">
                      Name
                    </p>
                    <p className="vads-u-margin-top--0">
                      Service Branch
                    </p>
                  </div>
                </va-card>
              </div>
              {/* End Testimonial Template */}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="vads-u-margin-bottom--6">
          <div className="vads-grid-container">
            <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-text-align--center vads-u-margin-bottom--4">
              Statistics Section
            </h2>
            <div className="vads-grid-row vads-u-margin-x--neg2p5">
              {/* Statistic Template - Repeat as needed */}
              <div className="vads-grid-col-12 tablet:vads-grid-col-6 desktop:vads-grid-col-3 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                <div className="vads-u-text-align--center">
                  <p className="vads-u-font-size--3xl vads-u-font-weight--bold vads-u-color--primary vads-u-margin-bottom--1 vads-u-margin-top--0">
                    Number
                  </p>
                  <p className="vads-u-margin--0">
                    Statistic description
                  </p>
                </div>
              </div>
              {/* End Statistic Template */}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="vads-u-background-color--primary-alt-lightest vads-u-padding-y--5 vads-u-margin-bottom--5">
          <div className="vads-grid-container">
            <div className="vads-grid-row">
              <div className="vads-grid-col-12 vads-u-text-align--center">
                <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0">
                  Call to Action Section
                </h2>
                <p className="vads-u-font-size--lg vads-u-margin-bottom--4">
                  Call to action description text goes here.
                </p>
                <va-button 
                  text="Contact Us" 
                  href="#contact-form"
                  uswds
                  big
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="vads-u-margin-bottom--6">
          <div className="vads-grid-container">
            <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-margin-bottom--4">
              Contact Form Section
            </h2>
            
            <div className="vads-grid-row vads-u-margin-x--neg2p5">
              {/* Contact Form Column */}
              <div className="vads-grid-col-12 tablet:vads-grid-col-8 vads-u-padding-x--2p5">
                {/* Form would go here */}
                <form>
                  <div className="vads-grid-row vads-u-margin-x--neg2p5">
                    <div className="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                      <va-text-input
                        label="First name"
                        name="firstName"
                        required
                      />
                    </div>
                    <div className="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                      <va-text-input
                        label="Last name"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="vads-grid-row vads-u-margin-x--neg2p5">
                    <div className="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                      <va-text-input
                        label="Email address"
                        name="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="vads-grid-col-12 tablet:vads-grid-col-6 vads-u-padding-x--2p5 vads-u-margin-bottom--3">
                      <va-text-input
                        label="Phone number (optional)"
                        name="phone"
                        type="tel"
                      />
                    </div>
                  </div>
                  
                  <div className="vads-u-margin-bottom--3">
                    <va-select
                      label="Topic"
                      name="topic"
                      required
                    >
                      <option value="">-- Select a topic --</option>
                    </va-select>
                  </div>
                  
                  <div className="vads-u-margin-bottom--3">
                    <va-textarea
                      label="Message"
                      name="message"
                      required
                    />
                  </div>
                  
                  <div className="vads-u-margin-bottom--4">
                    <va-checkbox
                      label="Subscribe to newsletter"
                      name="newsletter"
                    />
                  </div>
                  
                  <va-button
                    text="Submit"
                    submit
                    uswds
                  />
                </form>
              </div>
              
              {/* Contact Information Sidebar */}
              <div className="vads-grid-col-12 tablet:vads-grid-col-4 vads-u-padding-x--2p5">
                <va-card background>
                  <h3 slot="headline">Contact Information</h3>
                  <div>
                    <p className="vads-u-margin-top--0">
                      <strong>Phone:</strong><br />
                      <va-telephone contact="8008271000" />
                    </p>
                    <p>
                      <strong>Hours:</strong><br />
                      Monday - Friday, 8:00 a.m. to 9:00 p.m. ET
                    </p>
                    <p>
                      <strong>Need immediate help?</strong><br />
                      If you are in crisis, visit <a href="https://www.veteranscrisisline.net/">VeteransCrisisLine.net</a>
                    </p>
                  </div>
                </va-card>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default LandingPageTemplate;
