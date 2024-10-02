import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Docs from "./components/Docs/Docs";
import Category from "./components/Category/Category";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/:category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
