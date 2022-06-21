import React from 'react';
import { createRoot } from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading'

const container = document.querySelector('#root');
const root = createRoot(container);

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        )
    }

    render() {
        if (!this.state.lat && this.state.errorMessage) {
            return <div>{this.state.errorMessage}</div>;
        }

        if (!this.state.lat && !this.state.errorMessage) {
            return <Loading message="Please accept location request" />
            // return <div>Waiting for user to accept the location request...</div>;
        }
        
        return <SeasonDisplay lat={this.state.lat} />;
    };
};

root.render(<App />);