import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import WelcomePage from "pages/WelcomePage";

const useStyles = makeStyles(() => ({
    paperStyles: {
        "min-height": "100vh",
    },
}));

function ContentSection() {
    const classes = useStyles();

    return (
        <Paper className={classes.paperStyles}>
            <WelcomePage />
        </Paper>
    );
}

export default ContentSection;
