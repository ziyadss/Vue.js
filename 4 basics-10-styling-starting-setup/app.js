const app = Vue.createApp({
    data() {
        return {
            boxSel: [false, false, false]
        }
    },
    methods: {
        select(box) {
            this.boxSel[box.charCodeAt() - 65] ^= true;
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.boxSel[0] };
        },
        boxBClasses() {
            return { active: this.boxSel[1] };
        },
        boxCClasses() {
            return { active: this.boxSel[2] };
        }
    }
})

app.mount('#styling')