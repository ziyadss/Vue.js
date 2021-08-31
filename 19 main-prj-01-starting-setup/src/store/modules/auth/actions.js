import { axiosAuth as axios } from '@/axios-instance';

var timer;
export default {
  async authenticate(context, payload) {
    payload.form.returnSecureToken = true;
    const modeURL = payload.mode === 'signup' ? 'signUp' : 'signInWithPassword';

    try {
      const { data } = await axios.post(
        `:${modeURL}?key=${process.env.VUE_APP_FIREBASE_KEY}`,
        payload.form
      );

      const expiresIn = parseInt(data.expiresIn) * 1000;
      const userData = {
        refreshToken: data.refreshToken,
        userID: data.localId,
        userToken: data.idToken,
      };

      timer = setTimeout(() => context.dispatch('logout'), expiresIn);

      //data.email, data.displayName
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('expiry', expiresIn + new Date().getTime());

      context.commit('setUser', userData);
    } catch (e) {
      throw e.response.data.error || { message: 'UNKNOWN_ERROR' };
    }
  },
  fetchUser(context) {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) return;

    // if token has more than 1 min left
    const expiresIn = localStorage.getItem('expiry') - new Date().getTime();
    if (expiresIn > 1000 * 60) {
      timer = setTimeout(() => context.dispatch('logout'), expiresIn);
      context.commit('setUser', userData);
    }
  },
  logout(context) {
    localStorage.removeItem('user');
    context.commit('setUser', {
      refreshToken: null,
      userID: null,
      userToken: null,
    });
    clearTimeout(timer);
  },
};
