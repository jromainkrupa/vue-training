<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite ? '(favorite)' : ''}}</h2>
        <button @click="toggleFavorite">Toggle favorite</button>
        <button @click="toggleDetail">{{detailsAreVisible ? 'Hide' : 'Show'}}  Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }} </li>
        </ul>
    </li>
</template>

<script>
export default {
    // props: ['name', 'phoneNumber','emailAddress', `isFavorite`],
    props: {
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    
    data() {
        return {
            detailsAreVisible: false,
            friendIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleDetail() {
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleFavorite() {
            this.friendIsFavorite = !this.friendIsFavorite
        }
    }
}
</script>