"use client";
// components/AppointletButton.js
import React, { useEffect } from "react";

const AppointletButton = ({ bookingPageUrl }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.appointlet.com/"; // Verify Appointlet's current loader script URL
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Appointlet) {
        window.Appointlet.initPopupWidget({ url: bookingPageUrl });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [bookingPageUrl]);

  const openAppointletPopup = () => {
    if (window.Appointlet) {
      window.Appointlet.openPopupWidget(); // Or use initPopupWidget if you want to re-initialize
    }
  };

  return <button onClick={openAppointletPopup}>Book an Appointment</button>;
};

export default AppointletButton;
