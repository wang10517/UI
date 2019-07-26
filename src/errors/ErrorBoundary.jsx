import React , { Component } from 'react' ;


class ErrorBoudnary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            errorMessage : ""
        };
    }
    componentDidCatch(error, info) {
        this.setState({
            hasError : true,
            errorMessage : error + info
        })
    }

    render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>something went wrong in the current page, please contact the relevant personel to fix it</h1>;
        }
    
        return this.props.children; 
      }


}

export default ErrorBoudnary; 
