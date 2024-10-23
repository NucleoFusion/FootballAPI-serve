import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Docs from "./components/Docs/Docs";
import Category from "./components/Category/Category";
// import Statics from "./components/misc/Statics";
import StaticsBuffer from "./components/StaticsBuffer/StaticsBuffer";
import StaticsPage from "./components/StaticsPage/StaticsPage";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import QueryBuilder from "./components/QueryBuilder/QueryBuilder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/:category" element={<Category />} />
        <Route path="/statics" element={<StaticsPage />} />
        <Route path="/statics/:category" element={<StaticsBuffer />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/querybuilder" element={<QueryBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
