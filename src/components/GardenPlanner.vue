<template>
    <div>
        <h2>Your Garden</h2>
        <form @submit.prevent="addNewPlant">
            <label>
                Plant Name:
                <input v-model="newPlant.name" />
            </label>
            <label>
                Location:
                <input v-model="newPlant.location" />
            </label>
            <button type="submit">Add Plant</button>
        </form>
        <plant-list :plants="plants"></plant-list>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PlantList from "./PlantList";

export default {
    name: 'GardenPlanner',
    components: {
        PlantList
    },
    data() {
        return {
            newPlant: {
                name: "",
                location: ""
            }
        };
    },
    computed: {
        ...mapState(["plants"])
    },
    methods: {
        ...mapActions(["addPlant"]),
        addNewPlant() {
            this.addPlant({ ...this.newPlant, id: Date.now() });
            this.newPlant.name = "";
            this.newPlant.location = "";
        }
    }
};
</script>
