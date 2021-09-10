import axios from '@/axios-instance';

export default {
  registerCoach(context, payload) {
    const id = context.rootGetters.userID;
    const token = context.rootGetters.token;

    return axios.put(`coaches/${id}.json?auth=${token}`, payload).then(() => {
      payload.id = id;
      context.dispatch('becomeCoach', null, { root: true });
      context.commit('registerCoach', payload);
    });
  },

  fetchCoaches(context) {
    return axios.get('/coaches.json').then(({ data }) => {
      for (const key in data) data[key].id = key;

      const coaches = data ? Object.values(data) : [];

      context.commit('setCoaches', coaches);
    });
  },
};
