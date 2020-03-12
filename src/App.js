import React from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import NodesData from './components/NodesData'

const client = new ApolloClient({
  uri: "https://stm5e69de90b9086-ozobxibjnhckt02qyna7dmyl1xoccqnc.tugboat.qa/examples/article"
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
            <h1>React, GraphQL, Drupal</h1>
          <div>
            <NodesData/>
          </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
