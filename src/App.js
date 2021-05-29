import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Details from "./components/Details";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch className="App">
          <Route path="/details/:id">
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
    </Provider>
  );
}

export default App;
