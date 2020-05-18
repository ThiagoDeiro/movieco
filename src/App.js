import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import MoviePage from "./components/Movies/MoviePage/MoviePage";
import MainPage from "./pages/MainPage";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/movie/:id" exact component={MoviePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
