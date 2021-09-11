import { axiosAuth as axios } from '@/axios-instance';

var timer;
export default {
  authenticate(context, payload) {
    const form = { returnSecureToken: true, ...payload.form };
    const modeURL = payload.mode === 'signup' ? 'signUp' : 'signInWithPassword';

    return axios
      .post(`:${modeURL}?key=${process.env.VUE_APP_FIREBASE_KEY}`, form)
      .then(({ data }) => {
        const expiresIn = data.expiresIn * 1000;
        const userData = {
          displayName: data.displayName,
          refreshToken: data.refreshToken,
          userEmail: data.email,

          userID: data.localId,
          userToken: data.idToken,
        };

        timer = setTimeout(() => context.dispatch('logout'), expiresIn);

        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('expiry', expiresIn + new Date().getTime());

        context.commit('setUser', userData);
      })
      .catch((e) => {
        throw e.response.data.error || { message: 'UNKNOWN_ERROR' };
      });
  },
  fetchUser(context) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) return;

    // if token has more than 1 min left
    const expiresIn = localStorage.getItem('expiry') - new Date().getTime();
    if (expiresIn > 1000 * 60) {
      timer = setTimeout(() => context.dispatch('logout'), expiresIn);
      context.commit('setUser', userData);
    }
  },
  logout(context) {
    localStorage.removeItem('userData');
    localStorage.removeItem('expiry');
    context.commit('setUser', {
      displayName: null,
      refreshToken: null,
      userEmail: null,
      userID: null,
      userToken: null,
    });
    clearTimeout(timer);
  },
};
