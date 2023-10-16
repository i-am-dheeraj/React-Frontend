import React from "react";
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./DarkModeToggle.css"; // Import a CSS file for custom styles
import 'react-toggle/style.css'; // Import the default styles
import './custom-toggle.css'; // You can create your custom styles




const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <Toggle
      checked={isDark}
      onClick={onToggle}
      icons={{
        click: <FontAwesomeIcon icon={faMoon} />,
      }}
      aria-label="Dark mode toggle"
    />
  );
};

export default DarkModeToggle;
