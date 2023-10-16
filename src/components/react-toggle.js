import React from "react";
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./DarkModeToggle.css"; // Import a CSS file for custom styles

const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <Toggle
      checked={isDark}
      onChange={onToggle}
      icons={{
        checked: <FontAwesomeIcon icon={faMoon} />,
        unchecked: <FontAwesomeIcon icon={faSun} />,
      }}
      aria-label="Dark mode toggle"
    />
  );
};

export default DarkModeToggle;
