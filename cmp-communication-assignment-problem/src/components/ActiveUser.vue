<template>
    <div id="wrapper">
        <h2>{{ username }} </h2>
        <h3>{{ age }} </h3> 
    </div>

</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
    }
}
</script>

<style>
#wrapper {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

</style>
