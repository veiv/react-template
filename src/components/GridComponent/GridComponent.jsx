import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DataCard from 'components/DataCard';
import axios from 'axios';
import InputForm from 'components/InputForm';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
});

export default function GridComponent() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  const [values, setValues] = useState({});

  async function fetchPosts() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    setPosts(response.data.slice(0, 9));
  }

  function addPost(postData) {
    const newPost = {
      ...postData,
      id: posts.length + 1,
    };
    setPosts([newPost, ...posts]);
  }

  function handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
  }

  function deletePost(id) {
    const items = posts.filter((row) => row.id !== id);
    setPosts(items);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <InputForm
        values={values}
        handleChange={handleChange}
        addPost={addPost}
      />
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4}>
            <DataCard
              userId={post.userId}
              id={post.id}
              body={post.body}
              title={post.title}
              deletePost={deletePost}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
