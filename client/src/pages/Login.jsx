import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Button, TextField, makeStyles } from '@material-ui/core';
import { readQuestions } from '../store/actions/mcq';

const Auth = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNameChange = (event) => setName(event.target.value);

  const handleSubmit = async () => {
    try {
      await dispatch(readQuestions(name));
      history.push('/mcq');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className={classes.root}>
      <TextField id='standard-basic' label='Name' autoFocus value={name} onChange={handleNameChange}></TextField>
      <Button variant='contained' onClick={handleSubmit}>
        submit
      </Button>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
}));

export default Auth;
