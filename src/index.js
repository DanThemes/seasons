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

    renderContent() {
        if (!this.state.lat && this.state.errorMessage) {
            return <div>{this.state.errorMessage}</div>;
        }

        if (!this.state.lat && !this.state.errorMessage) {
            return <Loading message="Please accept location request" />
        }
        
        return <SeasonDisplay lat={this.state.lat} />;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    };
};

root.render(<App />);