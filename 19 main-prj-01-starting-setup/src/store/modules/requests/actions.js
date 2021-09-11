import axios from '@/axios-instance';

export default {
  contactCoach(context, payload) {
    const { coachID, form } = payload;
    return axios.post(`requests/${coachID}.json`, form).then(({ data }) => {
      const request = { id: data.name, coachID, ...form };
      context.commit('addRequest', request);
    });
  },
  fetchRequests(context) {
    const id = context.rootGetters.userID;
    const token = context.rootGetters.token;

    return axios.get(`/requests/${id}.json?auth=${token}`).then(({ data }) => {
      for (const id in data) data[id] = { id, ...data[id] };

      const requests = data ? Object.values(data) : [];

      context.commit('setRequests', requests);
    });
  },
};
