import jsonPlaceholder from '../api/jsonPlaceholder'


export const fetchPosts =  () => async dispatch => 
        {
        const response = await jsonPlaceholder.get('./posts')
        
        dispatch({type:'FETCH_POSTS',payload:response.data})
    }

/*

MIDDLEWARES IN REDUX

1. Synchronous action creators
creates a synchronous or sync action creator that returns 
an action object with  all the relevant data 
attached to that object and is  ready to be processed by our 
reducers.

2. Asynchronous action creators
is the one that is going to require a little bit of
time before it is ready to eventually dispatch an action. 

whenever we need to deal with network requests via
action creator, we need to use Asynchronous action creators
and need the middlewares.

3. What is Middlewares in redux?

in redux, when we are using middlewares,
dispatch function does not send actions directly to reducers
instead all the actions are first send through 
all of thedifferent middlewares in our application.

4. MIDDLEWARES IN REDUX

a. it is a function that gets called with every
 action we dispatch

b. inside of a fn(), we have the ability to 
STOP,MODIFY or otherwise mess aroun with actions
example: we can create a simple middlewares
that console log all the actions that get dispatched.

c. tons of open-source middlewars exist,
possible to write our own middlewares.

d. we use "redux=thunk" to solve our  async issues


5.REDUX-THUNK

A. NORMAL rules for action creators in redux...

a. Action creators must return plain action objects
a.i) Actions must have a type property
a.ii)Actions can optionally have a payload property 

B. RULES FOR ACTION CREATORS WITH REDUX THUNK

a. Action creators can return action objects

a.i) if an action object is returned , it must have a type
    an also optional 'payload'
        or
b. action creators can return functions

-----------------------------------------------------------



*/