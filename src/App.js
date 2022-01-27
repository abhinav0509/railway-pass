import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchResult from "./components/SearchResult";
import SearchTrain from "./components/SearchTrain";

import { Route, Switch } from "react-router";
import CheckPNR from "./components/CheckPNR";
import Help from "./components/Help";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/searchresult" component={SearchResult}></Route>
        <Route path="/checkpnr" component={CheckPNR}></Route>
        <Route path="/search" component={SearchTrain}></Route>
        <Route path="/Help" component={Help}></Route>
        <Route exact path="/" component={Hero} />
      </Switch>
    </div>
  );
}

export default App;
