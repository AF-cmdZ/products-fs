import React from "react";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  return (
    <div className="container mx-auto flex justify-center pt-4">
      <FilterableProductTable />
    </div>
  );
}

export default App;
