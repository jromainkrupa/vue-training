<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite === '1' ? '(favorite)' : ''}}</h2>
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
    props: ['name', 'phoneNumber','emailAddress', `isFavorite`],
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'manuel loren',
                phone: '090909099089',
                email: 'jofeo@ioou.com',
                
            },
            friendIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleDetail() {
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleFavorite() {
            if (this.friendIsFavorite === '1') {
                this.friendIsFavorite = '0'
            } else {
                this.friendIsFavorite = '1'
            }
        }
    }
}
</script>