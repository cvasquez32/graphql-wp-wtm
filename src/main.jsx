import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
