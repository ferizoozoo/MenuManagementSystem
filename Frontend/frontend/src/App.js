import Menu from "./containers/Menu/Menu";
import Cooks from "./containers/Menu/Cooks/Cooks";
import Meals from "./containers/Menu/Meals/Meals";
import AddCookForm from "./containers/Menu/Cooks/AddCookForm";
import AddMealForm from "./containers/Menu/Meals/AddMealForm";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/cooks/new" exact>
            <AddCookForm />
          </Route>

          <Route path="/cooks">
            <Cooks />
          </Route>

          <Route path="/meals/new" exact>
            <AddMealForm />
          </Route>

          <Route path="/meals">
            <Meals />
          </Route>

          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
