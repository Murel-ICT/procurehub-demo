import React from 'react';
import './App.css';

import ErrorBoundary from './components/ErrorBoundary';
import DataSimulator from './components/DataSimulator';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Murel ProcureHub Demo</h1>
      </header>

      <ErrorBoundary>
        <section className="dashboard">
          <DataSimulator />
        </section>
      </ErrorBoundary>
    </div>
  );
}

export default App;
