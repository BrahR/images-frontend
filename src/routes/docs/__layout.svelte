<script lang="ts">
	import '../../github.scss';
	import { base, assets } from '$app/paths';
	export const hydrate = false;
	export const router = false;
	export const prerender = true;
</script>

<template>
	<!-- svelte:head
		title {pageTitle($page.path)} · Frackit -->
	<div class="doc max-w-[80rem] m-auto">
		<slot />
	</div>
</template>
