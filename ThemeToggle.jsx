import React from 'react';
import './App.css';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle">
      <button className="theme-button" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}

export default ThemeToggle;
