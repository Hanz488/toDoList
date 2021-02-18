Vue.createApp({
    data() {
        return {
            goals: [],
            inputValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.inputValue);
            this.inputValue = '';
        }
    }
}).mount('#app');