import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles(() => ({
    generalStyles: {
        display: "inline-block",
        "margin-right": "5px",
    },
    labelStyles: {
        color: red[200],
    },
    firstLabelStyles: {
        "margin-top": "10px",
    },
}));

function DataCard(props) {
    const classes = useStyles();

    return (
        <Card elevation={10} className={classes.cardStyles}>
            <CardContent>
                <Typography variant="h2">Project details</Typography>
                <Typography
                    variant="subtitle1"
                    className={classNames(
                        classes.generalStyles,
                        classes.labelStyles,
                        classes.firstLabelStyles
                    )}
                >
                    Name
                </Typography>
                <Typography variant="body1" className={classes.generalStyles}>
                    {props.name}
                </Typography>

                <div></div>

                <Typography
                    variant="subtitle1"
                    className={classNames(
                        classes.generalStyles,
                        classes.labelStyles
                    )}
                >
                    Version
                </Typography>
                <Typography variant="body1" className={classes.generalStyles}>
                    {props.version}
                </Typography>

                <div></div>

                <Typography
                    variant="subtitle1"
                    className={classNames(
                        classes.generalStyles,
                        classes.labelStyles
                    )}
                >
                    Last updated
                </Typography>
                <Typography variant="body1" className={classes.generalStyles}>
                    {props.lastUpdated}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default DataCard;
