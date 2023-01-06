import { Router, Route, Switch } from "wouter";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
            <Route path="/movies:query">
              <Movies />
            </Route>
            <Route path="/movie/:id">
              <Movie />
            </Route>
          </Switch>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
