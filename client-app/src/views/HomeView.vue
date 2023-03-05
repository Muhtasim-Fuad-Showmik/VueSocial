<script setup lang="ts">
import { ref } from "vue";
import axios from 'axios';

interface Activity {
	id: string,
	title: string,
	description: string,
	date: string,
	category: string,
	city: string,
	venue: string
}

const initialActivities: Activity[] = [];
const activites = ref(initialActivities);
const getActivities = async () => {
	axios.get("http://localhost:5000/api/activities").then(response => {
		activites.value = response.data;
	});
};
getActivities();
</script>

<template>
	<main>	
		<h1 class="font-bold text-2xl mb-4">Activites</h1>
		<ul>
			<li class="mb-2" v-for="activity in activites" :key="activity.id">{{ activity.title }}</li>
		</ul>
	</main>
</template>
