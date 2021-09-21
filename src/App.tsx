import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import GitViewer from "./pages/git-viewer/git-viewer.component";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={GitViewer} />
      </Switch>
    </div>
  );
};

export default App;
