<script lang="ts">
	const features = [
		{
			title: 'Easily change your settings',
			description:
				"You can change everything via Discord,\nmaking it the perfect image uploader for people who don't want to visit a confusing or cluttered site to just change some settings.",
			image: '/embeds.png'
		},
		{
			title: 'Changing domains',
			description:
				'You can easily change your domain from inside Discord with a single slash command.',
			image: '/domains.png'
		},
		{
			title: 'What are you waiting for?',
			description:
				"Start now by joining the Discord, asking for a code and redeeming it! It's that simple.",
			image: '/redeem.png'
		}
	];
	import '../index.css';
	let desc =
		'Soggaimages is the fatest image uploader out there its built with the newest and fastest technologies';
	let title = 'Sogga images - a fast image uploader';
</script>

<svelte:head>
	<title>Sogga Image Uploader</title>
	<meta name="title" content="Sogga images - a fast image uploader" />
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:type" content="website" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={desc} />

	<meta property="theme-color" content="#1b8aeb" />

	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
</svelte:head>

<div>
	<div class="m-auto">
		<div class="text-center">
			<p class="text-3xl text-white">Welcome to sogga images</p>
			<p class="text-xl font-bold text-white">
				Looking to score a invite? join the <a
					class="text-red-600"
					href="https://discord.gg/mY8zTARu4g">Discord</a
				>
			</p>
		</div>
		<div class="grid justify-center content-center items-center pt-3 sogga-grid m-auto width-full">
			{#each features as feature}
				<div class="bg-gray-700 rounded-md max-w-xl min-h-[22rem] border-md p-3">
					<div class="pb-2">
						<img alt="" src={feature.image} class="object-cover w-full h-40" />
					</div>
					<div class="text-white w-full h-full">
						<div>
							<p class="text-xl">{feature.title}</p>
						</div>
						<div>
							<p>{feature.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
