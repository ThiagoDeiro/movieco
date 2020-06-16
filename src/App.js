import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import MoviePage from "./components/Movies/MoviePage/MoviePage";
import MainPage from "./pages/MainPage";
import Resultpage from "./pages/Resultpage";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="page-background">
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/results/:params" exact component={Resultpage} />
            <Route path="/movie/:id" exact component={MoviePage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
