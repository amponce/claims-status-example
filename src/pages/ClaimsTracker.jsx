import React, { useState } from "react";
import Layout from "../components/layout";
import { Help } from "../components/help";

/**
 * VA Claims Status Tracker with Document Uploader
 * 
 * This page allows Veterans to:
 * 1. View a summary of current claims
 * 2. See claim status with estimated completion dates
 * 3. Upload supporting documents for their claims
 */
const ClaimsTracker = () => {
  // State for file upload
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Sample claims data - in a real app, this would come from an API
  const claims = [
    {
      id: "SC12345678",
      type: "Service Connection",
      dateFiled: "2023-09-15",
      status: "Evidence gathering, review, and decision",
      estimatedCompletion: "2024-03-20",
      requiredActions: ["Submit DD214", "Attend C&P Exam on 02/15/2024"]
    },
    {
      id: "IU98765432",
      type: "Individual Unemployability",
      dateFiled: "2023-11-02",
      status: "Preparation for decision",
      estimatedCompletion: "2024-02-28",
      requiredActions: []
    },
    {
      id: "IR45678901",
      type: "Increased Rating",
      dateFiled: "2023-12-10",
      status: "Initial review",
      estimatedCompletion: "2024-05-15",
      requiredActions: ["Submit medical evidence"]
    }
  ];

  // Handle file selection
  const handleFileSelect = (e) => {
    const files = e.target.files;
    validateAndSetFiles(files);
  };

  // Handle drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    validateAndSetFiles(files);
  };

  // Validate files and update state
  const validateAndSetFiles = (files) => {
    setUploadError("");
    setUploadSuccess(false);
    
    const validFiles = [];
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (validTypes.includes(file.type)) {
        validFiles.push(file);
      } else {
        setUploadError("Only PDF, JPG, and PNG files are allowed.");
        return;
      }
    }
    
    setSelectedFiles(validFiles);
  };

  // Handle file upload
  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      setUploadError("Please select files to upload.");
      return;
    }

    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadSuccess(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // In a real app, you would send the files to an API here
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get status class for visual indication
  const getStatusClass = (status) => {
    if (status.includes("Initial review")) {
      return "vads-u-background-color--gold-lighter";
    } else if (status.includes("Evidence gathering")) {
      return "vads-u-background-color--primary-alt-lightest";
    } else if (status.includes("Preparation for decision")) {
      return "vads-u-background-color--green-lightest";
    } else if (status.includes("Complete")) {
      return "vads-u-background-color--green-lighter";
    }
    return "";
  };

  return (
    <Layout>
      <va-breadcrumbs uswds>
        <va-breadcrumb href="/">Home</va-breadcrumb>
        <va-breadcrumb current>Claims Status Tracker</va-breadcrumb>
      </va-breadcrumbs>
      
      <h1 className="vads-u-font-family--serif vads-u-font-size--h1 vads-u-margin-top--1 vads-u-margin-bottom--2">
        VA Claims Status Tracker
      </h1>
      
      <va-alert
        close-btn-aria-label="Close notification"
        status="info"
        visible
        class="vads-u-margin-bottom--4"
      >
        <h2
          id="claims-alert-headline"
          slot="headline"
        >
          Track Your Claims
        </h2>
        <p className="vads-u-margin-y--0">
          View the status of your VA claims and upload supporting documents. For the most up-to-date information, you can also call the VA at <va-telephone contact="8008271000" />.
        </p>
      </va-alert>

      {/* Claims Summary Section */}
      <section className="vads-u-margin-bottom--4">
        <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--2 vads-u-margin-bottom--2">
          Your Claims
        </h2>
        
        {claims.length === 0 ? (
          <va-alert
            status="info"
            visible
          >
            <p className="vads-u-margin-y--0">
              You don't have any active claims at this time.
            </p>
          </va-alert>
        ) : (
          <div className="vads-u-margin-bottom--4">
            {claims.map((claim) => (
              <div 
                key={claim.id} 
                className="vads-u-border--1px vads-u-border-color--gray-light vads-u-margin-bottom--3 vads-u-padding--3"
              >
                <div className="vads-l-row">
                  <div className="vads-l-col--12 medium-screen:vads-l-col--8">
                    <h3 className="vads-u-font-family--sans vads-u-font-size--h3 vads-u-margin-top--0 vads-u-margin-bottom--1">
                      {claim.type} <span className="vads-u-font-weight--normal vads-u-font-size--base">({claim.id})</span>
                    </h3>
                    <p className="vads-u-margin-top--0 vads-u-margin-bottom--1">
                      <strong>Date Filed:</strong> {formatDate(claim.dateFiled)}
                    </p>
                    <div className={`vads-u-padding--1 vads-u-margin-y--2 ${getStatusClass(claim.status)}`}>
                      <strong>Status:</strong> {claim.status}
                    </div>
                    <p className="vads-u-margin-bottom--1">
                      <strong>Estimated Completion:</strong> {formatDate(claim.estimatedCompletion)}
                    </p>
                  </div>
                  
                  <div className="vads-l-col--12 medium-screen:vads-l-col--4">
                    {claim.requiredActions.length > 0 ? (
                      <div className="vads-u-background-color--gold-lightest vads-u-padding--2 vads-u-margin-top--2">
                        <h4 className="vads-u-font-family--sans vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
                          Required Actions
                        </h4>
                        <ul className="vads-u-margin-y--0">
                          {claim.requiredActions.map((action, index) => (
                            <li key={index}>{action}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="vads-u-background-color--green-lightest vads-u-padding--2 vads-u-margin-top--2">
                        <h4 className="vads-u-font-family--sans vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
                          No Actions Required
                        </h4>
                        <p className="vads-u-margin-y--0">
                          Your claim is being processed. No action is needed from you at this time.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Document Uploader Section */}
      <section className="vads-u-margin-bottom--6">
        <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--4 vads-u-margin-bottom--2">
          Upload Supporting Documents
        </h2>
        
        <p className="vads-u-margin-bottom--2">
          Upload supporting documents for your claims. Accepted file types: PDF, JPG, PNG.
        </p>
        
        {/* File Upload Area */}
        <div 
          className={`vads-u-border--2px vads-u-border-style--dashed vads-u-padding--5 vads-u-margin-bottom--3 vads-u-text-align--center ${
            isDragging ? 'vads-u-border-color--primary' : 'vads-u-border-color--gray-medium'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <va-icon icon="upload_file" size="large" />
          <p className="vads-u-margin-y--2">
            Drag and drop files here, or
          </p>
          <va-button 
            text="Select Files" 
            secondary
            onClick={() => document.getElementById('file-upload').click()}
          />
          <input
            type="file"
            id="file-upload"
            multiple
            style={{ display: 'none' }}
            onChange={handleFileSelect}
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </div>
        
        {/* Selected Files List */}
        {selectedFiles.length > 0 && (
          <div className="vads-u-margin-bottom--3">
            <h3 className="vads-u-font-family--sans vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--2">
              Selected Files ({selectedFiles.length})
            </h3>
            <ul className="vads-u-margin-top--0">
              {selectedFiles.map((file, index) => (
                <li key={index}>
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </li>
              ))}
            </ul>
            
            <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-margin-top--2">
              <va-button 
                text="Upload Files" 
                onClick={handleUpload}
                class="vads-u-margin-right--2"
              />
              <va-button 
                text="Clear" 
                secondary
                onClick={() => setSelectedFiles([])}
              />
            </div>
          </div>
        )}
        
        {/* Upload Progress */}
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="vads-u-margin-y--3">
            <h3 className="vads-u-font-family--sans vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
              Uploading...
            </h3>
            <div className="vads-u-background-color--gray-light vads-u-width--full">
              <div 
                className="vads-u-background-color--primary vads-u-height--1" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="vads-u-margin-top--1 vads-u-margin-bottom--0">
              {uploadProgress}% complete
            </p>
          </div>
        )}
        
        {/* Upload Error */}
        {uploadError && (
          <va-alert
            status="error"
            visible
            class="vads-u-margin-top--2"
          >
            <h3 slot="headline">Upload Error</h3>
            <p className="vads-u-margin-y--0">
              {uploadError}
            </p>
          </va-alert>
        )}
        
        {/* Upload Success */}
        {uploadSuccess && (
          <va-alert
            status="success"
            visible
            class="vads-u-margin-top--2"
          >
            <h3 slot="headline">Upload Successful</h3>
            <p className="vads-u-margin-y--0">
              Your documents have been successfully uploaded. They will be reviewed and associated with your claim.
            </p>
          </va-alert>
        )}
      </section>

      {/* Need Help Section */}
      <section className="vads-u-margin-bottom--6 vads-u-background-color--gray-lightest vads-u-padding--3">
        <h2 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-margin-bottom--2">
          Need Help?
        </h2>
        
        <div className="vads-u-display--flex vads-u-flex-direction--column medium-screen:vads-u-flex-direction--row">
          <div className="vads-u-flex--1 vads-u-padding-right--2 vads-u-margin-bottom--2 medium-screen:vads-u-margin-bottom--0">
            <h3 className="vads-u-font-family--sans vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
              VA Benefits Hotline
            </h3>
            <p className="vads-u-margin-top--0 vads-u-margin-bottom--1">
              <va-telephone contact="8008271000" />
            </p>
            <p className="vads-u-margin-top--0 vads-u-margin-bottom--0">
              Monday through Friday, 8:00 a.m. to 9:00 p.m. ET
            </p>
          </div>
          
          <div className="vads-u-flex--1 vads-u-padding-right--2 vads-u-margin-bottom--2 medium-screen:vads-u-margin-bottom--0">
            <h3 className="vads-u-font-family--sans vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
              TTY Service
            </h3>
            <p className="vads-u-margin-top--0 vads-u-margin-bottom--1">
              <va-telephone contact="711" tty />
            </p>
            <p className="vads-u-margin-top--0 vads-u-margin-bottom--0">
              For hearing impaired Veterans
            </p>
          </div>
          
          <div className="vads-u-flex--1">
            <h3 className="vads-u-font-family--sans vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
              Veterans Service Organizations
            </h3>
            <p className="vads-u-margin-top--0 vads-u-margin-bottom--1">
              <va-link
                href="https://www.va.gov/vso/"
                text="Find a VSO representative"
              />
            </p>
            <p className="vads-u-margin-top--0 vads-u-margin-bottom--0">
              Get free help with your VA claims
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClaimsTracker;
