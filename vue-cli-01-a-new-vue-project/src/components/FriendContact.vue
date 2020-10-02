<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetail">{{detailsAreVisible ? 'Hide' : 'Show'}}  Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }} </li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'manuel loren',
                phone: '090909099089',
                email: 'jofeo@ioou.com'
            }
        }
    },
    methods: {
        toggleDetail() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
}
</script>