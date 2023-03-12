<script setup lang="ts">
    import type { Activity } from '@/models/activity';

    const props = defineProps<{
        activities?: Activity[]
    }>()
</script>

<template>
	<div class="grid grid-cols-8 gap-4">
        <div class="col-span-5">
            <ul>
                <li class="mb-2" v-for="activity in props.activities" :key="activity.id">{{ activity.title }}</li>
            </ul>
        </div>
    </div>
</template>