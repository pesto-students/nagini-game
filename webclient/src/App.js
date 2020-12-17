import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./views/game/Game";
import Login from "./views/login/Login";
import Score from "./views/score/Score";
import { useContext } from "react";
import { ResizeContext } from "./contexts/resizeContext";
import Init from "./views/Init/Init";
import Exit from "./views/Exit/Exit";

function App() {
  const { isWideScreen } = useContext(ResizeContext);

  return (
    <Router>
      <div className={`App ${isWideScreen ? "wide-screen" : ""}`}>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/score">
            <Score />
          </Route>
          <Route path="/exit">
            <Exit />
          </Route>
          <Route path="/">
            <Init />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
