import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App'
import {BrowserRouter,Route} from 'react-router-dom'

const pageOne = () =>
{
    return <div>Page One</div>
}


const pageTwo = () =>
{
    return( <div>Page Two
    <button>Click me</button>
    </div>)
}

const App = () =>
{
    return(
        <div>
            <BrowserRouter>
                <div>
                <Route path= "/" exact component = {pageOne} />
                <Route path= "/pageTwo" exact component = {pageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}


ReactDOM.render(
    <App />
    , document.querySelector('#root')
)


/*
APP CHALLENGES

1. Need to be able to navigate around
to separate pages in our app

2. need to allow user to login/logout   

3. NEED  to handle froms in redux

4.need to master crud operation in react/redux

5. good error handling
-------------------------------------------------------





*/