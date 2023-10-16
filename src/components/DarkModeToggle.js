import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      // Dark mode styles
      document.body.style.backgroundColor = "#222"; // Dark background color
      document.body.style.color = "#000"; // Black text color
    } else {
      // Light mode styles
      document.body.style.backgroundColor = "#fff"; // Light background color
      document.body.style.color = "#000"; // Black text color
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* Rest of your sidebar code */}
      <div className="col" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={faMoon} size="2x" color="#333" />
      </div>
      {/* Rest of your sidebar code */}
    </>
  );
}
