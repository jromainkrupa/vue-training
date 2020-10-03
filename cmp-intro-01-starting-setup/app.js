const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "toto la tata",
          phone: "04 77 89 99 99",
          email: "jkirouz@oioi.com",
        },
        {
          id: "julie",
          name: "julie ooouo",
          phone: "04 77 89 77 77",
          email: "hello@vdjiu.com",
        },
      ],
    };
  },
  methods: {},
});

app.component("friend-contact", {
  template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
  data() {
    return { 
        detailsAreVisible: false,
        friend: {
            id: "julie",
            name: "julie ooouo",
            phone: "04 77 89 77 77",
            email: "hello@vdjiu.com",
        },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
