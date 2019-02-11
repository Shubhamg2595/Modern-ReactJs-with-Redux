import axios from 'axios';



export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID fbaf1e96387802db8c03c401cdab92128752302321222559f84546568b0faf69'
    }

})