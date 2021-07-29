export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const fetchAPI = () => async (dispatch) => {
  dispatch(requestAPI());
  const endpoint = 'http://aws.random.cat/meow';
  fetch(endpoint)
    .then((data) => data.json())
    .then((response) => dispatch(getPicture(response)));
};
