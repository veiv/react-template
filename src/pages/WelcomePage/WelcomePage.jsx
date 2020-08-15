import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import MyCard from "components/MyCard";
import MyCardFunctionalComponent from "components/MyCardFunctionalComponent";

const useStyles = makeStyles(() => ({
    gridContainerStyles: {
        "padding-top": "10vh",
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
                <MyCard />

                <div className={classes.separatorStyles} />

                <MyCardFunctionalComponent />
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );
}

export default WelcomePage;
