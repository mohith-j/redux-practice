import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MoveDetails from "./components/MovieDetails/MovieDetails";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path={process.env.PUBLIC_URL} exact Component={Home} />
            <Route path={process.env.PUBLIC_URL+"movie/:imdbID"} Component={MoveDetails} />
            <Route path={process.env.PUBLIC_URL+"*"} Component={PageNotFound} />
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
