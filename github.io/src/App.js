import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faFolder } from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Make sure your CSS file is correctly referenced

function App() {
  // Replace "https://example.com/your-cv" with your actual URL
  const URL = "https://github.com/YuXiangLo/YuXiangLo.github.io/tree/main/CV_folder";

  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={faHammer} className="App-logo" spin />
        <p>
          This website is currently under construction.
        </p>
        <p>
          Check back soon!
        </p>
        {/* Folder Icon that links to your CV */}
        <a href={URL} target="_blank" rel="noopener noreferrer" className="App-link">
          <FontAwesomeIcon icon={faFolder} /> My CV

        </a>
      </header>
    </div>
  );
}

export default App;

