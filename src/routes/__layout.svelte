<script context="module" lang="ts">
	export function load({ session }: any) {
		return { props: { name: session?.user?.name } };
	}
</script>

<script lang="ts">
	import MediaQuery from 'svelte-media-query';
	import '../app.css';
	import '../roboto.css';
	const topLinks = [
		{
			href: '/',
			a: 'Home'
		},
		{
			href: 'https://dash.ascella.host',
			a: 'Dashboard'
		},
		{
			href: '/paste',
			a: 'Paste'
		}
	];
	const bottomLinks = [
		[
			{
				href: '/docs/faq',
				a: 'Faq'
			},
			{
				href: '/docs/rules',
				a: 'Rules'
			},
			{
				href: '/docs/privacy',
				a: 'Privacy'
			}
		],
		[
			{
				href: 'https://github.com/Tricked-dev/uploader',
				a: 'Github'
			}
		],
		[
			{
				href: 'https://dash.ascella.host',
				a: 'Dashboard'
			}
		],
		[
			{
				href: 'https://discord.gg/mY8zTARu4g',
				a: 'Discord'
			}
		]
	];
	const otherLinks = [
		{
			href: '/docs/domain',
			a: 'Adding your own domain'
		},
		{
			href: '/docs/rules',
			a: 'Rules'
		},
		{
			href: '/docs/privacy',
			a: 'Privacy'
		},
		{
			href: '/docs/index',
			a: 'Docs Index'
		},
		{
			href: '/docs/installing',
			a: 'Installing'
		},
		{
			href: '/domains',
			a: 'Domains'
		}
	];

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let show = false; // menu state
	let menu = null; // menu wrapper DOM reference
	export let name: string;
	onMount(() => {
		// if (window.location.hostname !== 'ascella.host' && window.location.hostname !== 'localhost') {
		// 	goto(`https://www.ascella.host${window.location.pathname}`);
		// }
		show = false;
		const handleOutsideClick = (event) => {
			if (menu && show && !menu.contains(event.target)) {
				show = false;
			}
		};

		const handleEscape = (event) => {
			if (show && event.key === 'Escape') {
				show = false;
			}
		};

		// add events when element is added to the DOM
		document.addEventListener('click', handleOutsideClick, false);
		document.addEventListener('keyup', handleEscape, false);

		// remove events when element is removed from the DOM
		return () => {
			document.removeEventListener('click', handleOutsideClick, false);
			document.removeEventListener('keyup', handleEscape, false);
		};
	});

	function gnome() {
		let audio = new Audio('woo.mp3');
		audio.play();
	}
</script>

<template bind:this={menu} class="flex-1 flex flex-col">
	<!--- Im crying myself too but i cba to deal with css sorry o7-->
	<MediaQuery query="(max-width: 1281px)" let:matches>
		{#if !matches}
			<nav class="topnav p-d gap-2 break-words px-4 flex justify-between h-8">
				<ul class="flex items-center">
					<li>
						{#each topLinks as link}
							<a class="p-3 hover:bg-green-700 link" href={link.href}>{link.a}</a>
						{/each}
					</li>
					<li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<a
							class={`p-3 cursor-pointer hover:bg-green-700 ${show ? 'bg-green-800' : ''} link`}
							on:click={() => (show = !show)}
						>
							Documentation
						</a>
					</li>
					{#if show}
						{#each otherLinks as link}
							<li>
								<a
									transition:fly={{ x: 1500, y: 0, duration: 800 }}
									href={link.href}
									class="p-3 hover:bg-green-700 link">{link.a}</a
								>
							</li>
						{/each}
					{/if}
				</ul>

				{#if name}
					<p on:click={gnome} class="text-right p-3 cursor-pointer">Welcome {name}</p>
				{:else}
					<a
						href="/docs/signup"
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Signup
					</a>
				{/if}
			</nav>
		{:else}
			<div class="topnav p-d gap-2 break-words bg-gray-700 ">
				{#each topLinks as link}
					<a class="p-3 hover:bg-green-700" href={link.href}>{link.a}</a>
				{/each}
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					class={`p-3 cursor-pointer hover:bg-green-700 ${show ? 'bg-green-800' : ''}`}
					on:click={() => (show = !show)}
				>
					Documentation
				</a>
				{#if show}
					{#each otherLinks as link}
						<a
							transition:fly={{ x: 1500, y: 0, duration: 800 }}
							href={link.href}
							class="p-3 hover:bg-green-700">{link.a}</a
						>
					{/each}
				{/if}
				{#if name}
					<p on:click={gnome} class="text-right p-3 cursor-pointer">Welcome {name}</p>
				{/if}
			</div>
		{/if}
	</MediaQuery>

	<div class="pb-4" />
	<slot />

	<div class="pb-7" />
	<div
		class="transform no-underline text-gray-500 hover:text-white min-h-full border-t-2 border-gray-600 hover:border-white pt-6 footer"
	>
		<div class="flex-auto flex list-none">
			{#each bottomLinks as links}
				<div>
					<u>
						{#each links as link}
							<li>
								<a href={link.href} class="px-4 py-2 not-sr-only hover:text-blue-500 translate-x-"
									>{link.a}</a
								>
							</li>
						{/each}
					</u>
				</div>
			{/each}
		</div>
	</div>
</template>
