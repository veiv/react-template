import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import DataCard from "components/DataCard";
import MyCard from "components/MyCard";
import MyCardFunctionalComponent from "components/MyCardFunctionalComponent";

import projectData from "../../res/projectData.json";

const useStyles = makeStyles(() => ({
    gridContainerStyles: {
        "padding-top": "30px",
    },
    separatorStyles: {
        height: "20px",
    },
}));

function WelcomePage() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.gridContainerStyles}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <DataCard {...projectData} />

                <div className={classes.separatorStyles} />

                <MyCard />

                <div className={classes.separatorStyles} />

                <MyCardFunctionalComponent />
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );
}

export default WelcomePage;
