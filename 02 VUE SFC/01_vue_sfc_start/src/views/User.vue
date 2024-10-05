<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref } from "vue";

const users = ref([
    {
        params: 'anjay',
        name: 'Anjay',
    },
    {
        params: 'kevin',
        name: 'Kevin'
    }
]);
</script>

<template>
    <Navbar />
    <h1>List of Users</h1>
    <ul>
        <li v-for="(item, index) in users" :key="item.params">
          

            <RouterLink :to="`/user/${item.params}`">  {{ item.name }} </RouterLink>
        </li>
    </ul>
</template>
