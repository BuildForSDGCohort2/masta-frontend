import axios from 'axios'

const URL = 'https://api.philodi.com/alexa/health'

export const philiaClient = async (q, health) => {
    const {data} = await axios.get(URL, {
        params:{
            q: q,
            health: health
        },
    });

    return data;
};