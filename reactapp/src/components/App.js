import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization:
                 'Client-ID fbaf1e96387802db8c03c401cdab92128752302321222559f84546568b0faf69'
            }

        })
        console.log(term);
    }

    render() {


        return (
            <div className='ui container' style={{ marginTop: '20px' }}>

                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}
export default App;  