<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
	<div class="h-screen">
		<nav class="w-full h-16 max-h-16 px-12 backdrop-blur-sm sticky top-0 z-50 shadow-md">
			<div class="w-16 h-16 flex items-center">
				<img src="/Logo.png" alt="logo" class="w-full h-full" />
				<span class="text-3xl font-bold text-primaryDark">Vue</span>
				<span class="text-3xl">Social</span>
			</div>
		</nav>
		<div class="bg-gradient-to-r from-primary to-orangeSoda pl-10 pb-10 h-[calc(100vh-64px)]">
			<div class="bg-white h-full p-10 rounded">
				<RouterView />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, RouterView } from 'vue'

export default defineComponent({
	setup() {

		return {} 
	}
})
</script>

<style scoped></style>