<template>
  <section>
    <header>
      <h1>My Super app</h1>
    </header>
    <div>
      <active-user
        v-for="user in users"
        :key="user.id"
        :username="user.username"
        :age="user.age"
      >
      </active-user>
      <user-data @add-user="setUserData"></user-data>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "jeanrom",
          username: "jeanromain",
          age: 30,
        },
        {
          id: "eloise",
          username: "eloisepivi",
          age: 26,
        },
      ],
    };
  },
  methods: {
    setUserData(username, age) {
      const newUser = (this.user = {
        username: username,
        age: +age,
      });
      this.users.push(newUser);
    },
  },
};
</script>
<style>
h1 {
  text-align: center;
  color: #58004d;
  font-size: bold;
}
</style>
