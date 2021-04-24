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
    callArea();
  }, []);

  const callArea = useCallback(async () => {
    apiClient
      .get("/api/area")
      .then((response) => {
        console.log(response.data);
        // setAreasResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
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
        {/* {sampleAreasJSON.map((item: any, i: any) => (
          <Route exact path={`/${item.name}`}>
            {areaSampleContent.map((item2: any, i: any) => (
              <AreaScreen areaInfo={item.name == item2.currentRoute ? } />
            ))}
          </Route>
        ))} */}
        <Route exact path="/computo">
          <AreaScreen areaInfo={null} />
        </Route>
        {/* {areaSampleContent.map((item: any, i: any) => (
          <Route exact path={`/${item.name}/${item.id}`}>
            <ProductScreen productInfo={item} />
          </Route>
        ))} */}
        {/* <Route exact path="/computation/1">
          <ProductScreen />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
