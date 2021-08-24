<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error">Error: {{ error }}</p>
      <p v-else-if="!resultsExist">
        No stored experiences - start by adding some survey results.
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      this.$http
        .get(
          "https://vue-http-demo-4791b-default-rtdb.europe-west1.firebasedatabase.app/surveys.json"
        )
        .then((response) => {
          if (!response.data) this.results = [];
          else this.results = Object.values(response.data);
        })
        .catch((error) => {
          console.log(error);
          this.error = "Failed to fetch data - please try again later.";
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  components: {
    SurveyResult,
  },
  computed: {
    resultsExist() {
      return this.results && this.results.length;
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>