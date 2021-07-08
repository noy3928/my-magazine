import React from "react";
import { Grid, Image, Text } from "../elements/index";
import Post from "./Post";
import Dashboard from "./Dashboard";
import Postlist from "./Postlist";
import Write from "./Write";
import Login from "./Login";
import Signup from "./SignUp";
import Noti from "./Noti";
import PostDetail from "./PostDetail";

import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

const Main = () => {
  return (
    <React.Fragment>
      <Grid
        width="70%"
        height="100%"
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="20px"
        is_glass
        padding="30px"
        font="GmarketL"
      >
        <Grid width="100%" is_grid>
          <Grid
            borderRadius="20px"
            is_glass
            padding="30px 0px"
            height="100%"
            className="first-box"
          >
            <Dashboard />
          </Grid>
          <Grid
            className="second-box"
            relative
            borderRadius="20px"
            is_glass
            flex
            // justifyContent="center"
            alignItems="center"
            scroll
            padding="20px 0px"
            flexDirection="column"
            height="100%"
          >
            <ConnectedRouter history={history}>
              <Route path="/" exact component={Postlist} />
              <Route path="/write" exact component={Write} />
              <Route path="/write/:id" exact component={Write} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/noti" exact component={Noti} />
              <Route path="/post/:id" exact component={PostDetail} />
            </ConnectedRouter>
          </Grid>
          {/* <Grid
            borderRadius="20px"
            is_glass
            height="100%"
            className="third-box"
          ></Grid> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Main;
