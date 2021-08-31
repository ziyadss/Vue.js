import axios from '@/axios-instance';

export default {
  async registerCoach(context, payload) {
    const id = context.rootGetters.userID;

    await axios.put(`coaches/${id}.json`, payload);

    payload.id = id;
    context.dispatch('becomeCoach', null, { root: true });
    context.commit('registerCoach', payload);
  },

  async fetchCoaches(context) {
    const { data } = await axios.get('/coaches.json');

    for (const key in data) data[key].id = key;

    const coaches = data ? Object.values(data) : [];

    context.commit('setCoaches', coaches);
  },
};
