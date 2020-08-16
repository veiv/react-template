import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(() => ({
    generalStyles: {
        display: "inline-block",
        "margin-right": "5px",
    },
}));

function DataCard(props) {
    const classes = useStyles();

    return (
        <Card elevation={10} className={classes.cardStyles}>
            <CardContent>
                <Typography
                    variant="subtitle1"
                    className={classes.generalStyles}
                >
                    Name
                </Typography>
                <Typography variant="body1" className={classes.generalStyles}>
                    {props.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default DataCard;
