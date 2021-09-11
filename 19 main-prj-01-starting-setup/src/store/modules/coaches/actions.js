import axios from '@/axios-instance';

export default {
  registerCoach(context, payload) {
    const id = context.rootGetters.userID;
    const token = context.rootGetters.token;

    return axios.put(`coaches/${id}.json?auth=${token}`, payload).then(() => {
      const coach = { id, ...payload };
      context.dispatch('becomeCoach', null, { root: true });
      context.commit('registerCoach', coach);
    });
  },

  fetchCoaches(context) {
    return axios.get('/coaches.json').then(({ data }) => {
      for (const id in data) data[id] = { id, ...data[id] };

      const coaches = data ? Object.values(data) : [];

      context.commit('setCoaches', coaches);
    });
  },
};
