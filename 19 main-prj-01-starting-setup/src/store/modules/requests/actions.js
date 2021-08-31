import axios from '@/axios-instance';

export default {
  async contactCoach(context, payload) {
    const { data } = await axios.post(
      `requests/${payload.coachID}.json`,
      payload.form
    );

    payload.form.coachID = payload.coachID;
    payload.form.id = data.name;
    context.commit('addRequest', payload.form);
  },
  async fetchRequests(context) {
    const id = context.rootGetters.userID;
    const { data } = await axios.get(`/requests/${id}.json`);

    for (const key in data) data[key].id = key;

    const requests = data ? Object.values(data) : [];

    context.commit('setRequests', requests);
  },
};
