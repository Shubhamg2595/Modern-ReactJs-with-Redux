import { combineReducers } from 'redux'
import postReducers from './postReducers'

export default combineReducers(
    {
        posts:postReducers

    }
);

/*
RULES OF REDUCERS

a. must return any values besides 'undefined'

b. Produces 'state', or data  to be used inside  of your app
using only previous state and the action object.

c. with reducers, it must not return reach 'out to itself'
to decide what value to return

it means, we should never try to fetch some data from within
the reducers using api request i.e get requests etc

d. must not mutate its input 'state' argument
 
we can actually mutate the 'state' argument if we want and 
redux will never throw any error, but there is one little 
corner case which can cause errors in our reux application.And hence
it is said to not mutate the state argument in reducers.





*/