import axios from 'axios';

const KEY = 'AIzaSyAvM7tiT1n2BB7_Ciasq9UopuP4BzJS_fs';




export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY,

        }
    }
)