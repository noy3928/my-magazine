import React from "react";
import { Grid, Image, Text } from "../elements/index";
import Menulist from "../components/Menulist";

const Dashboard = (props) => {
  return (
    <React.Fragment>
      <Grid
        flex
        flexDirection="column"
        height="20%"
        justifyContent="center"
        alignItems="center"
      >
        <Image shape="circle" size="45" />
        <Text>Hello, Jobs</Text>
      </Grid>
      <Grid
        flex
        flexDirection="column"
        alignItems="flex-start"
        padding="60px 0px 0px 50px"
      >
        <Menulist />
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
