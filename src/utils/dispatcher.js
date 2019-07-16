export const actionDispatcher = (type, payload) => {
  return {
    type,
    payload
  };
};

export const axiosConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'access-token': `${localStorage.getItem('token')}`,
    },
  }
};

export const githubConfig = (API_TOKEN) => ({
  Authorization: API_TOKEN,
});