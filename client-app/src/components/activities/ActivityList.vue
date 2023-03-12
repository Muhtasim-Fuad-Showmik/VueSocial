<script setup lang="ts">
    import type { Activity } from '@/models/activity';

    const props = defineProps<{
        activities?: Activity[]
    }>()
</script>

<template>
    <div class="border-b border-slate-300 p-4" v-for="activity in props.activities" :key="activity.id">
        <h2 class='text-xl font-semibold'>{{ activity.title }}</h2>
        <div class='text-sm text-slate-500 mb-2'>{{ activity.date }}</div>
        <div class='text-sm mb-2'>
            <p>{{ activity.description }}</p>
            <div>{{ activity.city }}, {{ activity.venue }}</div>
        </div>
        <div class='flex justify-between items-center'>
            <div class='h-6 bg-orangeSoda text-white text-xs px-2 py-1 rounded'>
                {{ activity.category }}
            </div>
            <button class='bg-primaryDark text-white rounded px-4 py-1 cursor-pointer' >
                View
            </button>
        </div>
    </div>
</template>