// src/components/ErrorBoundary.js
import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, message: '' };

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.toString() };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, background: '#fee', color: '#900' }}>
          <h2>Something went wrong:</h2>
          <pre>{this.state.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
