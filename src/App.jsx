import React from "react";
import { Header } from "./components/Header";
import { GridLayout } from "./components/GridLayout";

function App() {
  return (
    <div className="flex flex-col items-center gap-12">
      <Header />

      <GridLayout />
    </div>
  );
}

export default App;
