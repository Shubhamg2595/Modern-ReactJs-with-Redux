import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
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
            return <SeasonDisplay lat = {this.state.lat}/>
            //yes we can take state from one comp and pass it as props to other state.
        }

        return <div><Spinner message="Please Accept Location Request"/></div>
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
