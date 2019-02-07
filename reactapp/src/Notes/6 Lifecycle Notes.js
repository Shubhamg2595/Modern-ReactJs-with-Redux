{/*
why we need Lifecycle methods

1. constructor()

goood place to do state initialization (as it is a one time setup)

example: using geolovation to get user location only one time


2. render()

here we return JSX CODE.
That's all you need to do in render()

3. ComponentDidMount()

best place to do some initial data loading like api request..

even though we can also do the data loading step in constructor but
best react practices suggest to never do data loading in constructor

reason is simple as it makes the code much clear for anyone to understand

4. componentDidUpdate()

this method is invoked everytime our component changes maybe bcoz our state changes
or comp gets a new set of props from its parent

here, we can also perform data loading that needs to be done everytime component is updated.

example: make n/w requests everytime user clicks on a button or they enter some text into an input

5.ComponentWillUnmount()

invoked whenever component is being removed from the sccreen.
*/}