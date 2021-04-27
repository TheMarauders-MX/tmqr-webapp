import { Route, Router, Switch } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import { createBrowserHistory } from "history";
import RegisterScreen from "@screens/Home/RegisterScreen";
import ScanScreen from "@screens/Home/ScanScreen";
import BeneficiosScreen from "@screens/Home/BeneficiosScreen";
import { sampleAreasJSON } from "@samples/AreaPromotionContent";
import { areaSampleContent } from "@samples/AreaContent";
import AreaScreen from "@screens/Home/AreaScreen";
import { useCallback, useEffect, useState } from "react";
import apiClient from "@services/apiClient";
import "./theme/styles.scss";
import ProductScreen from "@screens/Home/ProductScreen";

const App = () => {
  // const [areasResponse, setAreasResponse] = useState(null);

  useEffect(() => {
    apiClient.get("/sanctum/csrf-cookie").then((response) => {
      // console.log(response);
    });
  }, []);

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <RegisterScreen />
        </Route>
        <Route exact path="/home">
          <HomeScreen areasObject={sampleAreasJSON} />
        </Route>
        <Route exact path="/scan">
          <ScanScreen />
        </Route>
        <Route exact path="/beneficios">
          <BeneficiosScreen />
        </Route>
        {areaSampleContent.map((item: any, i: any) => (
          <Route exact path={`/${item.currentRoute}`} key={i}>
            <AreaScreen areaInfo={item.items} departmentName={item.department} />
          </Route>
        ))}
        {areaSampleContent.map((item: any, i: any) =>
          item.items.map((item1: any, i1: any) => (
            <Route exact path={`/${item1.route}`} key={i}>
              <ProductScreen productInfo={item1} />
            </Route>
          ))
        )}
      </Switch>
    </Router>
  );
};

export default App;
