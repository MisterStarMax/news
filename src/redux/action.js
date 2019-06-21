const successLogin = () => {
  return {
    type: 'AUTORIZATION_SUCCESS',
  };
}

const errorLogin = (message) => {
  return {
    type: 'AUTORIZATION_ERROR',
    payload: message
  };
}

const fetchAutorization = (dispatch, server) => (data) => {
  server.autorization(data)
  .then(({status, message}) => {
    if (status) {
      localStorage.setItem('isLoged', true);
      dispatch(successLogin());
    } else dispatch(errorLogin(message));
  });
}

export {
  fetchAutorization
}
