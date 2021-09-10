import axios from '@/axios-instance';

export default {
  contactCoach(context, payload) {
    return axios
      .post(`requests/${payload.coachID}.json`, payload.form)
      .then(({ data }) => {
        payload.form.coachID = payload.coachID;
        payload.form.id = data.name;
        context.commit('addRequest', payload.form);
      });
  },
  fetchRequests(context) {
    const id = context.rootGetters.userID;
    const token = context.rootGetters.token;

    return axios.get(`/requests/${id}.json?auth=${token}`).then(({ data }) => {
      for (const key in data) data[key].id = key;

      const requests = data ? Object.values(data) : [];

      context.commit('setRequests', requests);
    });
  },
};
