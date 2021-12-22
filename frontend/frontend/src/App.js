import './App.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes.js';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {

  const links = useRoutes(routes)

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {links}
      </div>
    </ApolloProvider>
  );
}

export default App;
