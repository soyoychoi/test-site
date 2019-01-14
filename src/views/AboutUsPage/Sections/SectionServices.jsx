import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
import Face from "@material-ui/icons/Face";
import Loyalty from "@material-ui/icons/Loyalty";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionServices(props) {
  const { classes } = props;
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We support a variety of causes</h2>
          <h5 className={classes.description}>
            Some Random Stuff
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Social Equality"
            description={
              <span>
                <p>
                  Do you support equality in the work place? Do you support social causes? We can help you spread your message to socially aware consumers{" "}
                </p>
              </span>
            }
            icon={Face}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Sustainability"
            description={
              <span>
                <p>
                  Random stuff about being good for the environment!{" "}
                </p>
              </span>
            }
            icon="local_florist"
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Loyal Customers"
            description={
              <span>
                <p>
                  When customers share your values, on average the have 75% higher return rates. I have no idea.{" "}
                </p>
              </span>
            }
            icon={Loyalty}
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(servicesStyle)(SectionServices);
