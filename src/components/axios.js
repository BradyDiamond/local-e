import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/locale-86b21/us-central1/api'
});


export default instance;