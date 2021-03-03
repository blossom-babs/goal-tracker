const App = {
  data() {
    return {
      firstName: "John",
      enteredGoal: "",
      goals: [],
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = "";
    },
  },
};

Vue.createApp(App).mount("#app");
