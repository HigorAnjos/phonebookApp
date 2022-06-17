import axios from './axios';
import { getToken } from './localStorage';

const getAllContacts = async () => {
  const token = getToken();
  if (token) {
    const res = await axios.get('/phonebook/list', {
      headers: { authorization: `${token}` },
    });
    return res.data.phonebook;
  }
};

export default getAllContacts;
