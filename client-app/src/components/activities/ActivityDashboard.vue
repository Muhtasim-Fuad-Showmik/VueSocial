<script setup lang="ts">
    import type { Activity } from '@/models/activity';
import ActivityList from './ActivityList.vue';

    const props = defineProps<{
        activities?: Activity[]
    }>()
</script>

<template>
	<div class="grid grid-cols-8 gap-4">
        <div class="col-span-5">
            <h1 class="font-semibold text-3xl mb-4 ml-4">Activities</h1>
            <ActivityList :activities="activities" />
        </div>
    </div>
</template>