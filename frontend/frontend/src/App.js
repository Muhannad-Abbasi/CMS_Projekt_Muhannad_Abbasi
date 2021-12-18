import './App.css';
import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes.js';

const axios = require('axios');

function App() {

  // const [ movies, setMovies] = useState();

  // const getData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:1337/api/movies?populate=*");
  //     const code = response.status;
  //     if ( code >= 200 && code < 300 ) {
  //       console.log(response.data);
  //       setMovies(response.data);
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const links = useRoutes(routes)

  return (
    <div className="App">
      {/* <button onClick={getData}>Click me</button> */}
      {links}
    </div>
  );
}

export default App;
