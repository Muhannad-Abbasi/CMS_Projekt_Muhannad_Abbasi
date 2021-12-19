import './App.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes.js';

function App() {

  const links = useRoutes(routes)

  return (
    <div className="App">
      {/* <button onClick={getData}>Click me</button> */}
      {links}
    </div>
  );
}

export default App;
