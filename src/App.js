import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Details from "./components/Details";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <Header />
      <Switch className="App">
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
