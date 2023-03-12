<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
	<div class="h-screen">
		<NavBar />
		<div class="bg-gradient-to-r from-primary to-orangeSoda pl-10 pb-10 h-[calc(100vh-64px)]">
			<div class="bg-white h-full p-10 rounded overflow-auto">
				<RouterView />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, RouterView } from 'vue'
import NavBar from './components/layout/NavBar.vue';

export default defineComponent({
    setup() {
        return {};
    },
    components: { NavBar }
})
</script>

<style scoped></style>