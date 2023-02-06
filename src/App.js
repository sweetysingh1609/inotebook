import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { createBrowserHistory } from "history";
import NoteState from "./context/notes/NoteState";
export const customHistory = createBrowserHistory();
function App() {
  return (
    <>
      <NoteState>
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
      </NoteState>
    </>
  );
}

export default App;
