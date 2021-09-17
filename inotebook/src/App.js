import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
