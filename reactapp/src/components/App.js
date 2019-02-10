import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends React.Component {

    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization:
                 'Client-ID fbaf1e96387802db8c03c401cdab92128752302321222559f84546568b0faf69'
            }

        });

        console.log(response.data.results)
       
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