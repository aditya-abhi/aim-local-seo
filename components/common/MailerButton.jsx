"use client";

import React from "react";

const MailerLiteFormButton = () => {
  const handleClick = () => {
    if (window.ml) {
      window.ml("show", "3ttGXK", true);
    } else {
      console.error("MailerLite script not loaded yet");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="button button-lg bg-primary" // Add your custom CSS classes
    >
      Click here
    </button>
  );
};

export default MailerLiteFormButton;
