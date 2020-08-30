import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { searchPosts } from '../../store/actions/postActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  button: {
    marginTop: '15px',
    marginLeft: '5px',
  },
  search: {
    marginBottom: '15px',
  },
});

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
  };

  return (
    <Grid
      className={classes.search}
      container
      spacing={3}
      justify="flex-start"
      alignItems="center"
    >
      <Grid item xs={3} container alignItems="center">
        <TextField
          label="Search"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={3}>
        <button
          className={classes.button}
          onClick={(event) => {
            event.preventDefault();
            dispatch(searchPosts(values.search));
          }}
        >
          <SearchIcon />
        </button>
      </Grid>
    </Grid>
  );
};

export default Search;
