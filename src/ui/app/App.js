import "./App.css";
import { ContextWrapper } from "../../core/Context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../../routes/routes";
import Header from "../hoc/header/Header";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <ContextWrapper>
        <Header>
          <Switch>
            {routes.map((route, index) => (
              <Route path={route.path} component={route.element} key={index} exact></Route>
            ))}
          </Switch>
        </Header>
      </ContextWrapper>
    </BrowserRouter>
  );
}

export default App;
