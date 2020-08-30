import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  button: {
    marginTop: '15px',
    marginLeft: '5px',
  },
  myForm: {
    marginBottom: '20px',
  },
});

const InputForm = ({ values, handleChange, addPost }) => {
  const classes = useStyles();

  return (
    <form className={classes.myForm} noValidate autoComplete="off">
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={3}>
          <TextField
            label="User Id"
            name="userId"
            value={values.userId}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Body"
            name="body"
            value={values.body}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <button
            className={classes.button}
            onClick={(event) => {
              event.preventDefault();
              addPost({
                userId: values.userId,
                title: values.title,
                body: values.body,
              });
            }}
          >
            <AddIcon />
          </button>
        </Grid>
      </Grid>
    </form>
  );
};

export default InputForm;
