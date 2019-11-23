import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./design-system/container";
import Header from "./components/header";

import ShopPage from "./pages/shop";
import ListPage from "./pages/list";
import WritePage from "./pages/write";
import ErrorPage from "./pages/error";
import DetailPage from "./pages/detail";

function App() {
  return (
    <Router>
      <Container>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={ListPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/write" component={WritePage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
