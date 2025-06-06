import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const username = import.meta.env.VITE_WP_NAME;
const appPassword = import.meta.env.VITE_WP_PASSWORD;
const token = btoa(`${username}:${appPassword}`)

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Basic ${token}`,
  },
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
)
