import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Board from "./component/Board";
import Write from "./component/Write";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import Footer from "./component/Footer2";

function Routers() {
  return (
    <Router>
      {/* <body> */}
      <Header />
      <main>
        <div className="main-content wrapper">
          <Switch>
            <Route exact path="/" component={Board} />
            <Route exact path="/write" component={Write} />
          </Switch>
          <SideBar />
        </div>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
      {/* </body> */}
    </Router>
  );
}

export default Routers;
