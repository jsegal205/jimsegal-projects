import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import withTracker from "./GoogleAnalyticsTracker";

import Recipes from "./pages/recipes";
import Recipe from "./pages/recipe";
import NotFound from "./pages/not-found";
import TopNav from "./components/topnav";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import MountainGoat from "./pages/mountian-goat";
import Tabletop from "./pages/tabletop";

const App = () => {
  return (
    <>
      <Router>
        <header>
          <h1 className="app-header">Jim Segal Projects</h1>
          <TopNav />
        </header>
        <article>
          <Switch>
            <Route exact path="/" component={withTracker(Home)} />
            <Route path="/isJimWearingShorts" component={withTracker(Shorts)} />
            <Route path="/mountaingoat" component={withTracker(MountainGoat)} />
            <Route path="/recipes" component={withTracker(Recipes)} />
            <Route path="/recipe/:recipeSlug" component={withTracker(Recipe)} />
            <Route path="/tabletop" component={withTracker(Tabletop)} />
            <Route path="*" component={withTracker(NotFound)} />
          </Switch>
        </article>
      </Router>
    </>
  );
};
export default App;
