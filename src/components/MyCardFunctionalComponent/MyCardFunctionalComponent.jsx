import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Typography, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(() => ({
    cardStyles: {
        padding: "15px",
    },
    generalStyles: {
        "margin-bottom": 10,
    },
}));

function MyCardFunctionalComponent() {
    const classes = useStyles();
    const [count, setCount] = useState(0);

    return (
        <Card elevation={10} className={classes.cardStyles}>
            <CardContent>
                <Typography variant="h2" className={classes.generalStyles}>
                    Hello world!
                </Typography>
                <Typography variant="body1" className={classes.generalStyles}>
                    React functional component implementation
                </Typography>
            </CardContent>

            <CardActions className={classes.generalStyles}>
                <TextField
                    value={count}
                    variant="outlined"
                    disabled
                    fullWidth
                />
                <Button color="primary" onClick={(e) => setCount(count + 1)}>
                    Increment
                </Button>
            </CardActions>
        </Card>
    );
}

export default MyCardFunctionalComponent;
