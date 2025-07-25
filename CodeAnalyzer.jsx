import React from 'react';
import './App.css';

function CodeAnalyzer({ code, detectedPatterns }) {
  return (
    <div className="analysis-box">
      <h2>📊 Analysis Result</h2>

      <pre className="code-block">{code}</pre>

      {detectedPatterns.length > 0 && (
        <div>
          <h3>Detected Patterns:</h3>
          <ul>
            {detectedPatterns.map((pattern, idx) => (
              <li key={idx}>{pattern}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CodeAnalyzer;
