import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      style={{
        backgroundColor: isDark ? '#2c2c2c' : '',
        color: isDark ? '#ffffff' : '',
        border: '1px solid #fff',
        padding: '5px 10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s',
      }}
      aria-label="Dark mode toggle"
    >
      {isDark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
    </button>
  );
};

export default DarkModeToggle;
