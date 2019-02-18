import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App'
import { BrowserRouter, Route ,Link} from 'react-router-dom'

const pageOne = () => {
    return (
        <div>
            <p>Page One</p>
            <Link to='/pageTwo'>Navigate to page Two</Link>
        </div>)
}


const pageTwo = () => {
    return (<div><p>Page Two</p>

        <Link to ='/'>Navigate to page One</Link>
        <button>Click me</button>
    </div>)
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={pageOne} />
                    <Route path="/pageTwo" component={pageTwo} />
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

//  <Route path= "/"  component = {pageOne} />
// <Route path= "/pageTwo"  component = {pageTwo} />
              
if we dont use exact keyword, then above code will return b
output of both the components , when we search for
pageTwo component url...



*/