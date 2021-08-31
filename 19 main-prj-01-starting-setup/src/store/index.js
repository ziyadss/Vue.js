import { createStore } from 'vuex';
import auth from './modules/auth';
import coaches from './modules/coaches';
import requests from './modules/requests';

const modules = { auth, coaches, requests };

export default createStore({ modules });
