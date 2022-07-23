import axios from 'axios';

const getUser = async (query) => {
  try {
    const response = await axios.get(`https://randomuser.me/api/${query}`);
    return response.data;
  } catch (e) {
    console.log('Something error when try to get user data', e);
  }
  return true;
};

const service = {
  getUser,
};

export default service;
