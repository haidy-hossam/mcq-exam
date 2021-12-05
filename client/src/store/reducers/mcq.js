const initialState = {
  user: null,
  questions: [],
  score: 0,
};

const shuffleChoices = (choices) => {
  const _choices = [...choices];
  let i = _choices.length;
  if (i === 0) return [];
  while (--i) {
    let j = Math.floor(Math.random() * (i + 1));
    let tempi = _choices[i];
    let tempj = _choices[j];
    _choices[i] = tempj;
    _choices[j] = tempi;
  }
  return _choices;
};

const mcq = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'READ_QUESTIONS':
      const questions = [...payload.questions];
      questions.forEach((question) => (question.choices = [...shuffleChoices(question.choices)]));

      return {
        ...state,
        questions,
        user: payload.user,
        score: 0,
      };

    case 'FAILURE':
    default:
      return state;
  }
};

export default mcq;
