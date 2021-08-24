<template>
  <BaseCard>
    <BaseButton
      @click="changeTab('StoredResources')"
      label="Stored Resources"
      :mode="buttonMode('StoredResources')"
    />
    <BaseButton
      @click="changeTab('AddResource')"
      label="Add Resource"
      :mode="buttonMode('AddResource')"
    />
  </BaseCard>

  <keep-alive>
    <component :is="currentTab" />
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      currentTab: "StoredResources",
      resources: [
        {
          id: "official-guide",
          name: "Official Guide",
          description: "The official Vue.js documentation.",
          url: "https://vuejs.org/",
        },
        {
          id: "google",
          name: "Google",
          description: "Learn to google...",
          url: "https://google.com/",
        },
      ],
    };
  },

  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
    buttonMode(tab) {
      return this.currentTab === tab ? "default" : "flat";
    },
    addResource(resource) {
      resource.id = new Date().toISOString();
      this.resources.push(resource);
      this.currentTab = "StoredResources";
    },
    removeResource(id) {
      const idx = this.resources.findIndex((r) => r.id === id);
      this.resources.splice(idx, 1);
    },
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
};
</script>