import React from "react";
import { withStyles } from "@material-ui/styles";
import { Button, Typography, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const styles = () => ({
    cardStyles: {
        padding: "15px",
    },
    generalStyles: {
        "margin-bottom": 10,
    },
});

class MyCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        const { classes } = this.props;

        return (
            <Card elevation={10} className={classes.cardStyles}>
                <CardContent>
                    <Typography variant="h2" className={classes.generalStyles}>
                        Hello world!
                    </Typography>
                    <Typography
                        variant="body1"
                        className={classes.generalStyles}
                    >
                        React class component implementation
                    </Typography>
                </CardContent>

                <CardActions className={classes.generalStyles}>
                    <TextField
                        value={this.state.count}
                        variant="outlined"
                        disabled
                        fullWidth
                    />
                    <Button color="primary" onClick={this.onClick}>
                        Increment
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(MyCard);
