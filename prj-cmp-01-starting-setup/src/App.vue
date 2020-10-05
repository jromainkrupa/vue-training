<template>
    <ul>
        <learning-ressource 
        v-for="storedRessource in storedRessources" 
        :key="storedRessource.id"
        :title="storedRessource.title"
        :description="storedRessource.description"
        :link="storedRessource.link"></learning-ressource>
    </ul>
</template>

<script>
import LearningRessource from './components/learning-ressources/LearningRessource.vue'
export default {
    components: {
        LearningRessource
    },
    data() {
        return {
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
    }
}
</script>