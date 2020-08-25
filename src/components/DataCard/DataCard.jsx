import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import red from '@material-ui/core/colors/red';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  generalStyles: {
    display: 'inline-block',
    'margin-right': '5px',
  },
  labelStyles: {
    color: red[200],
  },
  firstLabelStyles: {
    'margin-top': '10px',
  },
  button: {
    marginTop: '15px',
    marginLeft: '80%',
    alignItems: 'flex-end',
  },
}));

function DataCard({ userId, id, body, title, deletePost }) {
  const classes = useStyles();

  return (
    <Card elevation={10} className={classes.cardStyles}>
      <CardContent>
        <Typography variant="h6">Post information</Typography>
        <Typography
          variant="subtitle1"
          className={classNames(
            classes.generalStyles,
            classes.labelStyles,
            classes.firstLabelStyles
          )}
        >
          User ID:
        </Typography>
        <Typography className={classes.generalStyles}>{userId}</Typography>

        <div></div>

        <Typography
          variant="subtitle1"
          className={classNames(classes.generalStyles, classes.labelStyles)}
        >
          Id:
        </Typography>
        <Typography className={classes.generalStyles}>{id}</Typography>

        <div></div>

        <Typography
          variant="subtitle1"
          className={classNames(classes.generalStyles, classes.labelStyles)}
        >
          Title:
        </Typography>
        <Typography className={classes.generalStyles}>{title}</Typography>

        <div></div>

        <Typography
          variant="subtitle1"
          className={classNames(classes.generalStyles, classes.labelStyles)}
        >
          Body:
        </Typography>
        <Typography className={classes.generalStyles}>{body}</Typography>

        <button className={classes.button} onClick={() => deletePost(id)}>
          <DeleteIcon />
        </button>
      </CardContent>
    </Card>
  );
}

export default DataCard;
