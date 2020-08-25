import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputForm from 'components/InputForm';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  button: {
    marginTop: '15px',
    marginLeft: '5px',
  },
  search: {
    marginBottom: '15px',
  },
});

export default function TableComponent() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  const [values, setValues] = useState({});

  async function fetchPosts() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    setPosts(response.data.slice(0, 9));
  }

  function deletePost(id) {
    const items = posts.filter((row) => row.id !== id);
    setPosts(items);
  }

  function addPost(postData) {
    const newPost = {
      ...postData,
      id: posts.length + 1,
    };
    setPosts([newPost, ...posts]);
    setValues({});
  }

  function searchPost(string) {
    const items = posts.filter(
      (post) => post.body.includes(string) || post.title.includes(string)
    );
    setPosts(items);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  function handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
  }

  return (
    <>
      <InputForm
        values={values}
        handleChange={handleChange}
        addPost={addPost}
      />
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
              searchPost(values.search);
            }}
          >
            <SearchIcon />
          </button>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">User ID</TableCell>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Body</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell align="left">{post.userId}</TableCell>
                <TableCell align="left">{post.id}</TableCell>
                <TableCell align="left">{post.title}</TableCell>
                <TableCell align="left">{post.body}</TableCell>
                <TableCell align="left">
                  <button onClick={() => deletePost(post.id)}>
                    <DeleteIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
