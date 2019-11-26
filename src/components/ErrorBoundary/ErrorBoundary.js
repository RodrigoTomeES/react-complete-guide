import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: '',
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true, 
            errorMessage: error,
        });
    }

    render() {
        let returnContent = this.props.children;

        if (this.state.hasError) {
            returnContent = <h1>{}</h1>;
        }
        
        return returnContent;
    }
}

export default ErrorBoundary;