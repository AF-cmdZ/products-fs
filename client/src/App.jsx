import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminView from "./views/AdminView";
import HomeView from "./views/HomeView";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <main className="container mx-auto flex flex-col items-center pt-4 max-w-xs">
      <Router>
        <ApolloProvider client={client}>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>
            <Route path="/admin">
              <AdminView />
            </Route>
          </Switch>
        </ApolloProvider>
      </Router>
    </main>
  );
}

export default App;
