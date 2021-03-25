import Menu from "./containers/Menu/Menu";
import Cooks from "./containers/Menu/Cooks/Cooks";
import Meals from "./containers/Menu/Meals/Meals";
import MenuItemsForm from "./containers/Menu/AddMenuItems/MenuItemsForm";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/cooks">
            <Cooks />
          </Route>

          <Route path="/meals">
            <Meals />
          </Route>

          <Route path="/add">
            <MenuItemsForm />
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
