import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  // This method is called when an error is caught in the child components
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  // This method is called to log error details
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can log the error to an external service here
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Safety check for errorInfo
      const errorDetails = this.state.errorInfo ? this.state.errorInfo.componentStack : 'No component stack available';
      
      return (
        <div style={{ padding: '20px', backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {errorDetails} {/* Fallback if componentStack is not available */}
          </details>
        </div>
      );
    }

    return this.props.children; // Render the children if no error
  }
}

export default ErrorBoundary;
