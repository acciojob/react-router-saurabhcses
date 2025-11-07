
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";

// const Home = () => <div>Home Page</div>;
// const About = () => <div>About Page</div>;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
