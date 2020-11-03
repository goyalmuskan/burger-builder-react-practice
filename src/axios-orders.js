import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-builder-a533d.firebaseio.com/'
});

export default instance;