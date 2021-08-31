import { axiosAuth as axios } from '@/axios-instance';

export default {
  becomeCoach(context) {
    context.commit('becomeCoach');
  },
  async login(context, payload) {
    try {
      const { data } = await axios.post(
        `:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_KEY}`,
        payload
      );

      context.commit('setUser', data);
    } catch (e) {
      throw e.response.data.error || { message: 'UNKNOWN_ERROR' };
    }
  },
  async signup(context, payload) {
    payload.returnSecureToken = true;

    try {
      const { data } = await axios.post(
        `:signUp?key=${process.env.VUE_APP_FIREBASE_KEY}`,
        payload
      );

      context.commit('setUser', data);
    } catch (e) {
      throw e.response.data.error || { message: 'UNKNOWN_ERROR' };
    }
  },
};
