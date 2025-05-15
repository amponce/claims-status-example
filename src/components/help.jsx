import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";

/**
 * Help component that provides standardized help information
 * for the VA application template
 */
export const Help = () => {
  return (
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
  );
};
