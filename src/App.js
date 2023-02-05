import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from "./components/About";
import { createBrowserHistory } from "history";
export const customHistory = createBrowserHistory();
function App() {
  return (
    <>
      <Router history={customHistory}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
