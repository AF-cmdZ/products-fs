import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import React from "react";
import "./App.css";
import HomeView from "./views/HomeView";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <main className="container mx-auto flex justify-center pt-4">
      <ApolloProvider client={client}>
        <HomeView />
      </ApolloProvider>
    </main>
  );
}

export default App;
