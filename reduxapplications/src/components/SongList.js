import React, { Component } from 'react';
import {connect} from 'react-redux'

class SongList extends Component
{
    render()
    {
        return(
            <div>Songlist</div>
        )
    }

}

const mapStateToProps =(state) =>
{
    
    return {songs : state.songs}
}

export default connect(mapStateToProps)(SongList);

/*
1.
function connect()
{
    return function()
    {
        return 'hello'
    }
}

connect() //no output
connect()() //hello

2.
mapStateToProps : is also a convention not a fix method,
so we can simply make it as getMyState

this method conveys that we are going to take our state 
object i.e all of the data that's inside of the redux store
and we are going to run some calculation on it
or some computation that's going to cause that data
to eventually show up as props inside of our component

3. in above mapStateToProps methods,

line : {songs : state.songs}
is actually creating a props for our songlish component
as we already have all the app data present in State which
we are getting from connect that is somehow connected to Provider
*/