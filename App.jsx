import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import maliciousKeywords from './maliciousKeywords';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.className = theme;
    }, 300);
    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const analyzeInput = () => {
    const found = maliciousKeywords.filter(keyword =>
      inputText.toLowerCase().includes(keyword.toLowerCase())
    );

    if (found.length > 0) { 
      setResult(`⚠️ Found error\nDetected: ${found.join(', ')}`);
    } else {
      setResult('✅ No malicious keywords found.');
    }
  };

  return (
    <div className="container">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <h1 className="title">🔐 Malicious JavaScript Detector</h1>

      <textarea
        className="text-area"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Paste your code or text here..."
      />

      <button className="analyze-button" onClick={analyzeInput}>
        🔍 Analyze
      </button>

      {result && <div className="result-box">{result}</div>}
    </div>
  );
}

export default App;
