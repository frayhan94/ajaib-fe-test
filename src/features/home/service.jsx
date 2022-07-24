import axios from 'axios';

const getUser = async (query) => {
  const response = await axios.get(`https://randomuser.me/api/${query}`);
  return response.data;
};

const service = {
  getUser,
};

export default service;
