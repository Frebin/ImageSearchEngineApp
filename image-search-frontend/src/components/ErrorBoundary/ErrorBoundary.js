import { Component, ErrorInfo, ReactNode } from "react";

import UnexpectedError from "../UnexpectedError/UnexpectedError";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(_) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    if (process.env.VITE_APP_ENV !== "PRODUCTION") {
      console.error("Uncaught Error: ", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return <UnexpectedError />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
