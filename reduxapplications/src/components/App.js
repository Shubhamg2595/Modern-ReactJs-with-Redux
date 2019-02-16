import React from 'react';
import PostList from './PostList'
const App = () => {
    return (
        <div className="ui container">
        <PostList/>
        </div>
        
    )
}

export default App;


/*
How to Fetch data with Redux

1. component gets rendered on the screen

2. now this postList needs to get data from somewhere (for this app
    from jsonPlaceHolder api)

    FOR DATA LOADING, WE WILL USE
    COMPONENT'S 'componentDidMount()' lifecycle method

3. We call action Creator from 'componentDidMount'

4. Action creator runs code to make API request

5. API responds with Data

6. Action creaor 
*/