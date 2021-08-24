const app = Vue.createApp({
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 2,
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                }
            ]
        }
    }
})

app.component('contact-info', {
    template: `<li :key="contact.id">
    <h2>{{contact.name}}</h2>
    <button @click="toggleDetails">{{expanded?'Hide Details':'Show Details'}}</button>
    <ul v-if="expanded">
      <li><strong>Phone:</strong> {{contact.phone}}</li>
      <li><strong>Email:</strong> {{contact.email}}</li>
    </ul>
  </li>`,
    data() {
        return {
            expanded: false,
            contact: {
                id: 2,
                name: 'Julie Jones',
                phone: '09876 543 221',
                email: 'julie@localhost.com',
            }
        }
    },
    methods:
    {
        toggleDetails() {
            this.expanded ^= true
        }
    }
})
app.mount('#app')
