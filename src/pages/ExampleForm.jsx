import React, { useState } from "react";
import Layout from "../components/layout";

/**
 * Example form page showcasing VA form components and simple validation patterns
 */
const ExampleFormPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    feedback: "",
    services: []
  });
  
  // State for form validation errors
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    services: ""
  });
  
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate name
    if (!formData.fullName.trim()) {
      setFormErrors(prev => ({...prev, fullName: "Please enter your full name"}));
      isValid = false;
    }
    
    // Validate email
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormErrors(prev => ({...prev, email: "Please enter a valid email address"}));
      isValid = false;
    }
    
    // Validate services
    if (formData.services.length === 0) {
      setFormErrors(prev => ({...prev, services: "Please select at least one service"}));
      isValid = false;
    }
    
    // If valid, show success message
    if (isValid) {
      alert("Form submitted successfully!");
      // In a real app, you would submit to an API here
    }
  };
  
  // Input change handler
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    
    // Clear errors when user starts typing
    if (field === 'fullName' && formErrors.fullName) {
      setFormErrors(prev => ({...prev, fullName: ""}));
    } else if (field === 'email' && formErrors.email) {
      setFormErrors(prev => ({...prev, email: ""}));
    }
  };
  
  // Checkbox change handler
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    let updatedServices = [...formData.services];
    
    if (isChecked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter(item => item !== value);
    }
    
    setFormData({
      ...formData,
      services: updatedServices
    });
    
    if (formErrors.services) {
      setFormErrors(prev => ({...prev, services: ""}));
    }
  };
  
  return (
    <Layout title="Example Form">
      <va-breadcrumbs uswds>
        <va-breadcrumb href="/">Home</va-breadcrumb>
        <va-breadcrumb current>Example Form</va-breadcrumb>
      </va-breadcrumbs>
      
      <va-alert
        close-btn-aria-label="Close notification"
        status="info"
        visible
        class="vads-u-margin-bottom--4"
      >
        <h2
          id="form-example-headline"
          slot="headline"
        >
          Form Example
        </h2>
        <p className="vads-u-margin-y--0">
          This page demonstrates a simple form using VA components with validation.{' '}
          <va-link
            href="https://design.va.gov/patterns/form"
            text="Learn more about VA form patterns"
          />
          {' '}for best practices.
        </p>
      </va-alert>
      
      <form onSubmit={handleSubmit} className="vads-u-margin-bottom--6">
        {/* Name field with error handling */}
        <div className="vads-u-margin-bottom--3">
          <va-text-input
            label="Full Name"
            name="fullName"
            required
            error={formErrors.fullName}
            onInput={(e) => handleInputChange('fullName', e.target.value)}
            value={formData.fullName}
          />
        </div>
        
        {/* Email field with error handling */}
        <div className="vads-u-margin-bottom--3">
          <va-text-input
            label="Email Address"
            name="email"
            type="email"
            required
            error={formErrors.email}
            onInput={(e) => handleInputChange('email', e.target.value)}
            value={formData.email}
          />
        </div>
        
        {/* Phone field (optional) */}
        <div className="vads-u-margin-bottom--3">
          <va-text-input
            label="Phone Number (Optional)"
            name="phone"
            type="tel"
            onInput={(e) => handleInputChange('phone', e.target.value)}
            value={formData.phone}
          />
        </div>
        
        {/* Services checkboxes with error handling */}
        <div className="vads-u-margin-bottom--3">
          <va-checkbox-group
            label="Which VA services are you interested in?"
            required
            error={formErrors.services}
          >
            <va-checkbox
              label="Health Care"
              value="health"
              onInput={handleCheckboxChange}
              checked={formData.services.includes('health')}
            />
            <va-checkbox
              label="Education and Training"
              value="education"
              onInput={handleCheckboxChange}
              checked={formData.services.includes('education')}
            />
            <va-checkbox
              label="Disability"
              value="disability"
              onInput={handleCheckboxChange}
              checked={formData.services.includes('disability')}
            />
            <va-checkbox
              label="Housing Assistance"
              value="housing"
              onInput={handleCheckboxChange}
              checked={formData.services.includes('housing')}
            />
          </va-checkbox-group>
        </div>
        
        {/* Feedback textarea */}
        <div className="vads-u-margin-bottom--4">
          <va-textarea
            label="Additional Feedback (Optional)"
            name="feedback"
            onInput={(e) => handleInputChange('feedback', e.target.value)}
            value={formData.feedback}
          />
        </div>
        
        {/* Form buttons */}
        <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap">
          <va-button
            text="Submit Form"
            submit
            class="vads-u-width--auto vads-u-margin-right--2"
          />
          <va-button
            text="Cancel"
            secondary
            class="vads-u-width--auto"
            onClick={() => window.location.href = '/'}
          />
        </div>
      </form>
    </Layout>
  );
};

export default ExampleFormPage;
