import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import InputForm from 'components/InputForm';
import Search from 'components/Search';
import { deletePost, resetPosts } from '../../store/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  button: {
    marginTop: '15px',
    marginLeft: '5px',
  },
});

const TableComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.items);

  useEffect(() => {
    dispatch(resetPosts());
  }, [dispatch]);

  return (
    <>
      <InputForm />
      <Search />
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
                  <button onClick={() => dispatch(deletePost(post.id))}>
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
};

export default TableComponent;
