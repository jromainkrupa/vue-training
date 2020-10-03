<template>
    <form id="form" @submit.prevent="submitData">
        <div id="field">
            <label>username</label>
            <input type="text" v-model="enteredUsername">
        </div>
        <div id="field">
            <label>age</label>
            <input type="number" v-model="enteredAge">
        </div>
        <button>Update</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredUsername: '',
            enteredAge: ''
        }
    },
    emits: ['add-user'],
    methods: {
        submitData() {
            this.$emit(
                'add-user',
                this.enteredUsername,
                this.enteredAge,
                )
        }
    }
}
</script>
<style>
#form {
    margin: 2em;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    background-color: aqua;
    width: 40%;
}
#field {
    margin: 10px;
    text-align: center;
}
label {
    margin-right: 2em;
    color:  #58004d;
    font-size: bold;
}
</style>