import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminContext from "./context/AdminContext";
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
          {/* This is a precursor to using useContext with useReducer! This will replace need for Redux in many cases! */}
          <AdminContext.Provider value={React.useState(false)}>
            <Switch>
              <Route path="/" exact>
                <HomeView />
              </Route>
              <Route path="/admin">
                <AdminView />
              </Route>
            </Switch>
          </AdminContext.Provider>
        </ApolloProvider>
      </Router>
    </main>
  );
}

export default App;
