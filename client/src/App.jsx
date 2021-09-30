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
    <main className="container mx-auto flex flex-col items-center pt-4 max-w-xs">
      <ApolloProvider client={client}>
        <HomeView />
      </ApolloProvider>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-24">
        Admin
      </button>
    </main>
  );
}

export default App;
