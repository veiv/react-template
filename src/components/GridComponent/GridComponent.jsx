import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DataCard from 'components/DataCard';
import InputForm from 'components/InputForm';
import { deletePost, resetPosts } from '../../store/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
});

const GridComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.items);

  useEffect(() => {
    dispatch(resetPosts());
  }, [dispatch]);

  return (
    <>
      <InputForm />
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
              deletePost={() => dispatch(deletePost(post.id))}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GridComponent;
