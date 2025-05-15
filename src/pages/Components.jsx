import React from "react";
import Layout from "../components/layout";
import "@department-of-veterans-affairs/component-library/dist/main.css";

// Removed React component examples that require React bindings

/**
 * Components showcase page
 * Displays examples of VA components for reference
 */
const ComponentsPage = () => {
  return (
    <Layout title="VA Components">
      <va-breadcrumbs uswds>
        <va-breadcrumb href="/">Home</va-breadcrumb>
        <va-breadcrumb current>Components</va-breadcrumb>
      </va-breadcrumbs>
      
      <p className="vads-u-font-size--lg vads-u-margin-bottom--4">
        This page demonstrates various VA components from the VA Design System.
      </p>
      
      <section className="vads-u-margin-bottom--6">
        <h2>Alerts</h2>
        <div className="vads-u-margin-bottom--2">
          <va-alert
            close-btn-aria-label="Close notification"
            status="info"
            visible
          >
            <h2
              id="info-alert-headline"
              slot="headline"
            >
              Informational Alert
            </h2>
            <p className="vads-u-margin-y--0">
              This is an informational alert with improved accessibility and formatting.
            </p>
          </va-alert>
        </div>

        <div className="vads-u-margin-bottom--2">
          <va-alert
            close-btn-aria-label="Close notification"
            status="success"
            visible
          >
            <h2
              id="success-alert-headline"
              slot="headline"
            >
              Success Alert
            </h2>
            <p className="vads-u-margin-y--0">
              This is a success alert with improved accessibility and formatting.
            </p>
          </va-alert>
        </div>
        <div className="vads-u-margin-bottom--2">
          <va-alert
            close-btn-aria-label="Close notification"
            status="warning"
            visible
          >
            <h2
              id="warning-alert-headline"
              slot="headline"
            >
              Warning Alert
            </h2>
            <p className="vads-u-margin-y--0">
              This is a warning alert with improved accessibility and formatting.
            </p>
          </va-alert>
        </div>
        <div className="vads-u-margin-bottom--2">
          <va-alert
            close-btn-aria-label="Close notification"
            status="error"
            visible
          >
            <h2
              id="error-alert-headline"
              slot="headline"
            >
              Error Alert
            </h2>
            <p className="vads-u-margin-y--0">
              This is an error alert with improved accessibility and formatting.
            </p>
          </va-alert>
        </div>
        <>
        <h2>
          Content title
        </h2>
        <va-alert-expandable
          status="info"
          trigger="Expandable Alert Example"
          close-btn-aria-label="Close expandable notification"
        >
          <p className="vads-u-margin-y--0">
            This is the expandable alert content. To take action on this alert, please call{' '}
            <va-telephone contact="8775551234" />
            {' '}or visit{' '}
            <va-link
              href="javascript:void(0);"
              text="va.gov"
            />
            {' '}for more information.
          </p>
        </va-alert-expandable>
        <p>
          Surrounding content.
        </p>
      </>
      
      </section>
      
      <section className="vads-u-margin-bottom--6">
        <h2>Buttons</h2>
        <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap">
          <va-button text="Primary Button" class="vads-u-margin-right--2 vads-u-margin-bottom--2" />
          <va-button text="Secondary Button" secondary class="vads-u-margin-right--2 vads-u-margin-bottom--2" />
          <va-button text="Disabled Button" disabled class="vads-u-margin-right--2 vads-u-margin-bottom--2" />
          <va-button text="Button with Icon" icon="arrow-right" class="vads-u-margin-bottom--2" />
        </div>
      </section>
      
      <section className="vads-u-margin-bottom--6">
        <h2>Form Controls</h2>
        
        <h3>Text Input</h3>
        <div className="vads-u-margin-bottom--4">
          <va-text-input label="Standard Text Input" name="text-example" />
        </div>
        
        <h3>Select</h3>
        <div className="vads-u-margin-bottom--4">
          <va-select label="Select Dropdown" name="select-example">
            <option value="">-- Select an option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </va-select>
        </div>
        
        <h3>Checkbox Group</h3>
        <div className="vads-u-margin-bottom--4">
          <va-checkbox-group label="Checkbox Group">
            <va-checkbox label="Option 1" name="checkbox-example" value="option1" />
            <va-checkbox label="Option 2" name="checkbox-example" value="option2" />
            <va-checkbox label="Option 3" name="checkbox-example" value="option3" />
          </va-checkbox-group>
        </div>
        
        <h3>Radio Group</h3>
        <div className="vads-u-margin-bottom--4">
          <va-radio
            error={null}
            header-aria-describedby={null}
            hint=""
            label="Select one historical figure"
            label-header-level=""
          >
            <va-radio-option
              label="Sojourner Truth"
              name="group"
              value="1"
            />
            <va-radio-option
              label="Frederick Douglass"
              name="group"
              value="2"
            />
            <va-radio-option
              label="Booker T. Washington"
              name="group"
              value="3"
            />
            <va-radio-option
              label="George Washington Carver"
              name="group"
              value="4"
            />
          </va-radio>
        </div>
        
        <h3>Textarea</h3>
        <div className="vads-u-margin-bottom--4">
          <va-textarea label="Textarea" name="textarea-example" />
        </div>
      </section>
      
      <section className="vads-u-margin-bottom--6">
        <h2>Cards</h2>
        <div className="vads-l-row">
          <div className="vads-l-col--12 medium-screen:vads-l-col--4 vads-u-padding--2">
            <va-card>
              <h3 slot="headline">Card Title</h3>
              <p>This is a basic card component that can be used to display content in a card format.</p>
              <va-button slot="actions" text="Card Action" secondary />
            </va-card>
          </div>
          <div className="vads-l-col--12 medium-screen:vads-l-col--4 vads-u-padding--2">
            <va-card background>
              <h3 slot="headline">Card with Background</h3>
              <p>This card has a background color applied.</p>
              <va-button slot="actions" text="Card Action" secondary />
            </va-card>
          </div>
          <div className="vads-l-col--12 medium-screen:vads-l-col--4 vads-u-padding--2">
            <va-card>
              <h3 slot="headline">Interactive Card</h3>
              <p>Cards can contain various interactive elements.</p>
              <va-button slot="actions" text="Primary Action" />
            </va-card>
          </div>
        </div>
      </section>
     
      <section className="vads-u-margin-bottom--6">
        <h2>Accordion</h2>
        <va-accordion>
          <va-accordion-item
            header="First Amendment"
            id="first"
          >
            <p>
              Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
            </p>
          </va-accordion-item>
          <va-accordion-item
            header="Second Amendment"
            id="second"
          >
            <p>
              A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
            </p>
          </va-accordion-item>
          <va-accordion-item
            header="Third Amendment"
            id="third"
          >
              <p>
              No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
            </p>
          </va-accordion-item>
        </va-accordion>
      </section>

      
      
      <section className="vads-u-margin-bottom--6">
        <h2>Date Input</h2>
        <div className="vads-u-margin-bottom--4">
          <va-date
            label="What's the date or anticipated date of your release from active duty?"
            name="discharge-date"
          />
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <h2>Links</h2>
        <div className="vads-u-margin-bottom--4">
          <p>
            If you need help to gather your information or fill out your application/form,{' '}
            <va-link
              href="https://va.gov/vso/"
              text="contact a local Veterans Service Organization (VSO)"
            />
          </p>

          <div className="vads-u-margin-top--2">
            <va-link-action
              href="https://va.gov/vso/"
              label="This is an aria label for the Action Link"
              message-aria-describedby="Custom message"
              text="Call to action"
              type="primary"
            />
          </div>
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <h2>Loading Indicator</h2>
        <div className="vads-u-margin-bottom--4">
          <div>
            <va-loading-indicator
              label="Loading"
              message="Loading your application..."
            />
          </div>
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <h2>Need Help</h2>
        <div className="vads-u-margin-bottom--4">
          <va-need-help>
            <div slot="content">
              <p>
                Call us at{' '}
                <va-telephone contact="8008271000" />
                . We're here Monday through Friday, 8:00 a.m to 9:00 p.m ET. If you have hearing loss, call{' '}
                <va-telephone
                  contact="711"
                  tty
                />
                .
              </p>
            </div>
          </va-need-help>
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <h2>OMB Info</h2>
        <div className="vads-u-margin-bottom--4">
          <va-omb-info
            exp-date="12/31/2077"
            omb-number="12-3456"
            res-burden={120}
          />
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <h2>On This Page Navigation</h2>
        <div className="vads-u-margin-bottom--4">
          <div>
            <button onClick={function noRefCheck(){}}>
              EspaÃ±ol
            </button>
            <button onClick={function noRefCheck(){}}>
              English
            </button>
            <button onClick={function noRefCheck(){}}>
              Tagalog
            </button>
            <article>
              <va-on-this-page />
              <h2 id="if-im-a-veteran">
                If I'm a Veteran, can I get VR&E benefits and services?
              </h2>
              <p>
                You may be eligible for VR&E benefits and services if you're a Veteran, and you meet all of the requirements listed below.
              </p>
              <p>
                <strong>
                  All of these must be true. You:
                </strong>
              </p>
              <ul>
                <li>
                  Didn't receive a dishonorable discharge,{' '}
                  <strong>
                    and
                  </strong>
                </li>
                <li>
                  Have a service-connected disability rating of at least 10% from VA,
                  <strong>
                    and
                  </strong>
                </li>
                <li>
                  <a href="#">
                    Apply for VR&E services
                  </a>
                </li>
              </ul>
              <h2 id="telephone-contacts">
                Telephone Contacts
              </h2>
              <p>
                Here is a table of phone numbers
              </p>
              <h2 id="some-additional-info">
                Some additional information
              </h2>
              <p>
                Placeholder for additional content.
              </p>
              <ol>
                <li>
                  Alpha
                </li>
                <li>
                  Beta
                </li>
                <li>
                  Gamma
                </li>
              </ol>
            </article>
          </div>
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <h2>Process List</h2>
        <div className="vads-u-margin-bottom--4">
          <va-process-list>
            <va-process-list-item
              header="Check to be sure you can request a Board Appeal"
              level={3}
            >
              <p>
                You can request a Board Appeal up to 1 year from the date on your decision notice. (Exception: if you have a contested claim, you have only 60 days from the date on your decision notice to request a Board Appeal.)
              </p>
              <p>
                You can request a Board Appeal for these claim decisions:
              </p>
              <ul>
                <li>
                  An initial claim
                </li>
                <li>
                  A Supplemental Claim
                </li>
                <li>
                  A Higher-Level Review
                </li>
              </ul>
              <p>
                <strong>
                  Note:{' '}
                </strong>
                You can't request a Board Appeal if you've already requested one for this same claim.
              </p>
            </va-process-list-item>
            <va-process-list-item header="Gather your information">
              <p>
                Here's what you'll need to apply:
              </p>
              <ul>
                <li>
                  Your mailing address
                </li>
                <li>
                  The VA decision date for each issue you'd like us to review (this is the date on the decision notice you got in the mail)
                </li>
              </ul>
            </va-process-list-item>
            <va-process-list-item header="Start your request">
              <p>
                We'll take you through each step of the process. It should take about 30 minutes.
              </p>
            </va-process-list-item>
          </va-process-list>
        </div>
      </section>
      
      {/* Statement of Truth section removed due to compatibility issues */}
      
      <section className="vads-u-margin-bottom--6">
        <h2>Banner</h2>
        <div className="vads-u-margin-bottom--4">
          <va-banner
            data-label="Info banner"
            headline="Temporary closure of acute psychiatry at Lyons"
            type="info"
            visible
          >
            <p>
              We have temporarily closed our Acute Psychiatry at our Lyons Campus. All mental health admissions are being routed to our sister VA facilities in New York, Bronx and Manhattan or to the community as appropriate.
            </p>
            <a href="#">
              Get updates on affected services and facilities
            </a>
          </va-banner>
        </div>
      </section>
      
      <section className="vads-u-margin-bottom--6">
        <h2>Cards</h2>
        <div className="vads-u-margin-bottom--4">
          <va-card>
            <p>
              Example card content
            </p>
          </va-card>
        </div>
      </section>
      
      <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-justify-content--center">
        <va-button
          text="Back to Home"
          href="/"
          secondary
          class="vads-u-margin-y--4"
        />
      </div>
    </Layout>
  );
};
export default ComponentsPage;
