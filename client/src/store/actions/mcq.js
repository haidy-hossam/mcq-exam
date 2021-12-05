import axios from 'axios';

export const readQuestions = (name) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/mcq`);

    dispatch({
      type: 'READ_QUESTIONS',
      payload: { questions: res.data, user: name },
    });
  } catch (error) {
    dispatch({
      type: 'FAILURE',
    });

    throw error.response.data;
  }
};
