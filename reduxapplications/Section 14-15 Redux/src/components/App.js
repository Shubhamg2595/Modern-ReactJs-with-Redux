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

6. Action creator returns an 'action' with the fetched data
on 'payload' property
also dispatch method will then send that action
to different reducer methods

7. Some reducer sees the action,returns the data 
off the  'payload' 

8.now since new state object will be created when reducer
is executed, redux/react-redux cause our react app
to be rerendered

*/