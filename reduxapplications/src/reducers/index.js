import { combineReducers } from 'redux'

const songReducers = () => {
    return [
        { title: 'No scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:35' },
        { title: 'All Star', duration: '3:15' },
        { title: 'hello', duration: '22:05' }

    ]
}


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}


export default combineReducers({
    songs:songReducers,
    selectedSong:selectedSongReducer 
})