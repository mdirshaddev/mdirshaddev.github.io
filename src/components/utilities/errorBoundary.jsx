import { Component } from 'react'
import * as Sentry from '@sentry/browser'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component{
  constructor(){
    super()
    this.state={
      error: '',
      eventId: '',
      errorInfo: '',
      hasError: false
    }
  }

  static getDerivedStateFromError(error){
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error, errorInfo){
    console.log({ error, errorInfo })
    this.setState({ errorInfo })
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId, errorInfo });
    });
  }

  render(){
    const { hasError, errorInfo } = this.state;
    if (hasError) {
      return (
        <div className="my-5 card">
          <div className="card-header">
            <p>
              An error has occurred in this component.{' '}
              <span
                style={{ cursor: 'pointer', color: '#0077FF' }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload this page
              </span>{' '}
            </p>
          </div>

          <div className="card-body">
            <details className="error-details">
              <summary>Click for error details</summary>
              {errorInfo && errorInfo.componentStack.toString()}
            </details>
          </div>

          <button
            className="bg-primary text-light"
            onClick={() =>
              Sentry.showReportDialog({ eventId: this.state.eventId })
            }
          >
            Report feedback
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}


ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired
}