import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  makeStyles,
} from '@material-ui/core';

const MCQ = () => {
  const classes = useStyles();
  const { questions, user } = useSelector((state) => state.mcq);
  const [data, setData] = useState({
    user,
    questions: questions.map(() => ''),
    score: 0,
    activeStep: 0,
  });

  const handleChange = (event) => {
    let _questions = data.questions;
    _questions[event.target.name] = event.target.value;
    setData({ ...data, questions: _questions });
  };

  const handleNext = async () => {
    setData((prev) => ({
      ...prev,
      score: questions[prev.activeStep].rightChoice === prev.questions[prev.activeStep] ? prev.score + 1 : prev.score,
      activeStep: prev.activeStep + 1,
    }));
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={data.activeStep} orientation='vertical'>
        {questions.map((question, index) => (
          <Step key={question._id}>
            <StepLabel icon={<></>}>question {index + 1}</StepLabel>
            <StepContent>
              <Typography>{question.description}</Typography>
              <FormControl>
                <RadioGroup name={index.toString()} value={data.questions[index]} onChange={handleChange}>
                  {question.choices.map((choice, choiceIndex) => (
                    <FormControlLabel
                      key={choiceIndex}
                      value={choice}
                      control={<Radio color='default' />}
                      label={choice}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <div className={classes.actionsContainer}>
                <div>
                  <Button variant='contained' color='primary' onClick={handleNext} className={classes.button}>
                    {data.activeStep === questions.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {data.activeStep === questions.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>
            All questions completed - you're score is {data.score} out of {questions.length}.
          </Typography>
        </Paper>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default MCQ;
