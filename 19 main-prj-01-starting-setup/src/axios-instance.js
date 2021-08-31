import axios from 'axios';

export default axios.create({
  baseURL:
    'https://vue-http-demo-4791b-default-rtdb.europe-west1.firebasedatabase.app/',
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${store.state.token}`,
  // },
});

export const axiosAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
});
