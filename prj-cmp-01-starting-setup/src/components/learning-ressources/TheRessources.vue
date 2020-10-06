<template>
    <base-card>
        <primary-button @click="setSelectedTab('stored-ressources')" :mode="storedResButtonMode">Stored Ressources</primary-button>
        <primary-button @click="setSelectedTab('add-ressource')" :mode="addResButtonMode">Add Ressource</primary-button>        
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
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
            ressources: this.storedRessources,
            addRessource: this.addRessource,
            deleteRessource: this.removeRessource
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-ressources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-ressource' ? null : 'flat'
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
            
        },
        addRessource(title, description, url) {
            const newRessource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }
            this.storedRessources.unshift(newRessource)
            this.selectedTab = 'stored-ressources'
        },
        removeRessource() {
            const resIndex = this.storedRessources.findIndex(res => res.id)
            this.storedRessources.splice(resIndex, 1);
        }
    }
}
</script>