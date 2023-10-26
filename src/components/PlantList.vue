<template>
    <div>
        <h3>Plant List</h3>
        <ul>
            <li v-for="plant in plants" :key="plant.id">
                {{ plant.name }} - {{ plant.location }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        plants: Array
    }
};
</script>
  