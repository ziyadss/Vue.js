/* const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.textContent = input.value;
    list.appendChild(item);
    input.value = '';
}) */

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() { this.goals.push(this.enteredValue); this.enteredValue = '' }
    }
}).mount('#app')