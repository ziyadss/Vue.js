<template>
  <div>
    <TheHeader />
    <!--    <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>  -->

    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoals #default="slotProps">
      <!-- <template #default="slotProps"> -->
      <h2>{{ slotProps.goal }}</h2>
      <p>{{ slotProps["another-prop"] }}</p>
      <!-- not rendered??^ -->
      <!-- </template> -->
    </CourseGoals>

    <!-- keep-alive optional, to cache state 
    <keep-alive>
      <component :is="selectedComponent" /> 
    </keep-alive> -->
  </div>
</template>
 

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import ActiveGoals from "./components/ActiveGoals.vue";
// import ManageGoals from "./components/ManageGoals.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  components: {
    BadgeList,
    UserInfo,
    CourseGoals,
    TheHeader,
    // ActiveGoals,
    // ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Ziyad Sameh",
        description: "Site owner and admin",
        role: "admin",
      },
      selectedComponent: null,
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>