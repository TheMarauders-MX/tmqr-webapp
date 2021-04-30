import { Route, Router, Switch } from "react-router-dom";
import HomeScreen from "./screens/Home/HomeScreen";
import { createBrowserHistory } from "history";
import RegisterScreen from "@screens/Home/RegisterScreen";
import ScanScreen from "@screens/Home/ScanScreen";
import BeneficiosScreen from "@screens/Home/BeneficiosScreen";
// import { areaSampleContent } from "@samples/AreaContent";
import AreaScreen from "@screens/Home/AreaScreen";
import { useCallback, useEffect, useState } from "react";
import apiClient from "@services/apiClient";
import "./theme/styles.scss";
import ProductScreen from "@screens/Home/ProductScreen";
import CardRegisterScreen from "@screens/Home/CardRegisterScreen";
import { AreaContent } from "@models/areapromotion.model";

const App = () => {
  const [areasResponse, setAreasResponse] = useState<AreaContent[]>([]);

  useEffect(() => {
    apiClient.get("/sanctum/csrf-cookie").then((response) => {
      // console.log(response);
    });
    callArea();
  }, []);

  const callArea = useCallback(async () => {
    apiClient
      .get("/api/area")
      .then((response) => {
        //console.log(response.data);
        setAreasResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const history = createBrowserHistory({ forceRefresh: true });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <RegisterScreen />
        </Route>
        <Route exact path="/home">
          <HomeScreen />
        </Route>
        <Route exact path="/registercard">
          <CardRegisterScreen />
        </Route>
        <Route exact path="/scan">
          <ScanScreen />
        </Route>
        <Route exact path="/beneficios">
          <BeneficiosScreen />
        </Route>
        {areasResponse &&
          areasResponse.map((item: any, i: any) => (
            <Route exact path={`/${item.currentRoute}`} key={i}>
              <AreaScreen areaInfo={item.items} departmentName={item.department} />
            </Route>
          ))}
        {areasResponse &&
          areasResponse.map((item: any, i: any) =>
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
