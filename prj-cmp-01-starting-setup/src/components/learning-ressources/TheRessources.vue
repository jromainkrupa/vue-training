<template>
    <base-card>
        <primary-button @click="setSelectedTab('stored-ressources')" :mode="storedResButtonMode">Stored Ressources</primary-button>
        <primary-button @click="setSelectedTab('add-ressource')" :mode="addResButtonMode">Add Ressource</primary-button>        
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredRessources from './StoredRessources.vue';
import AddRessource from './AddRessource.vue'

export default {
    components: {
        StoredRessources,
        AddRessource
    },
    data() {
        return {
            selectedTab: 'stored-ressources',
            storedRessources: [
                    {
                    id: 'official guide',
                    title: 'Official Guide',
                    description: 'The official vue js documentation',
                    link: 'http://vuejs.org'
                    },
                    {
                    id: 'google',
                    title: 'google',
                    description: 'so cool google',
                    link: 'http://google.org'
                    }
                ]
        }
    },
    provide() {
        return {
            ressources: this.storedRessources
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-ressources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-ressources' ? null : 'flat'
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
            
        }
    }
}
</script>