import { Route, Switch } from "react-router-dom";
import Landing from "./page/Landing";
import Product from "./page/Product";
import Standard from "./page/Standard";
import Classic from "./page/Classic";
import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/product" component={Product} />
      <Route path="/standard" component={Standard} />
      <Route path="/classic" component={Classic} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}

export default App;
