import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-d754f-default-rtdb.firebaseio.com/'
});

export default instance;