import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '11985e74817e1af9c6dfbb92231b26b4',
    language: 'es-ES',
  },
});

export default movieDB;
