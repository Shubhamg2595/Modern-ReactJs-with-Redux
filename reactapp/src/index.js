import React from 'react';
import ReactDOM from 'react-dom';


{/*always remember that in this simmple example,
render() method is invoked twice*/}
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage:""
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        )
    }



    render() {

        return (
            <div>Latitude : {this.state.lat}<br/>
             Error:   {this.state.errorMessage}
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
