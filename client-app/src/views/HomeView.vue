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
		<nav class="w-100 h-16 max-h-16 backdrop-blur-sm sticky top-0 z-50">
			<div class="w-16 h-16 flex items-center">
				<img src="/Logo.png" alt="logo" class="w-100 h-100" />
				<span class="text-3xl font-bold text-primaryDark">Vue</span>
				<span class="text-3xl">Social</span>
			</div>
		</nav>
		<h1>Activites</h1>
		<ul>
			<li v-for="activity in activites" :key="activity.id">{{ activity.title }}</li>
		</ul>
	</main>
</template>
