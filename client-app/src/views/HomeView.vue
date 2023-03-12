<script setup lang="ts">
import { ref } from "vue";
import axios from 'axios';
import type { Activity } from "@/models/activity";
import ActivityDashboard from "@/components/activities/ActivityDashboard.vue";

const activities = ref<Activity[]>([]);
const getActivities = async () => {
	axios.get<Activity[]>("http://localhost:5000/api/activities").then(response => {
		activities.value = response.data;
	});
};
getActivities();
</script>

<template>
	<main>
		<ActivityDashboard :activities="activities" />
	</main>
</template>
