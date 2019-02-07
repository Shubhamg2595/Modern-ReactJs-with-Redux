import React from 'react';
import ReactDOM from 'react-dom';


{/*always remember that in this simmple example,
render() method is invoked twice*/}
class App extends React.Component {

    state = {
            lat: null,
            errorMessage: ""
        }

    componentDidMount() {
        console.log('compone ntDidMount invoked')
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
            
        )
    }

    render() {
        console.log('render invoked')
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Laltitude : {this.state.lat}</div>
        }

        return <div><h3>Loading...</h3></div>
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
