<script>
	import Button from '$lib/Button.svelte';
	import Header from '$lib/Header.svelte';
	import List from '$lib/List/List.svelte';
	import ListItem from '$lib/List/ListItem.svelte';
	import { tweened } from 'svelte/motion';
	export let title = '';
	export let text = '';
	let angle = 0.618033988749;
	let numDots = 360;
	let dotsize = 1.62 * 1.62;
	let tweenedCount = tweened(0, {
		duration: 500,
		interpolate: (a, b) => (t) => Math.round((b - a) * t + a)
	});
	let innerWidth, innerHeight, svgWidth;
	export let variante = 0;
	let modificador = ['Light', 'Dark', 'Colored', 'Light2'];

	$: $tweenedCount = numDots;
</script>

<style lang="scss">
	@use "../../../app.scss" as *;

	svg {
		circle {
			fill: $grey_2;
		}

		g {
			transform: translate(50%, 50%);
		}
	}

	.PhiSvg {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas: 'media' 'texto';
		padding-top: 0;
		padding-right: $h3;
		padding-left: $h3;
		padding-bottom: $h2;

		@include media(s2) {
			padding-bottom: 0;
			padding-right: 0;
			grid-template-columns: 1fr 1.62fr;
			grid-template-areas: 'texto media';
		}

		.BannerMedia {
			grid-area: media;
		}

		.controls {
			margin-bottom: $h2;
			width: 100%;
			display: grid;
			gap: $h3;
		}

		.PhiSvgText {
			display: grid;
			justify-items: start;
			align-self: center;
			grid-area: texto;
		}
	}
</style>

<svelte:window bind:innerWidth bind:innerHeight />


<Header
	tipo={3} variante={6}
	{title}
	subtitle={text} />

<main class="PhiSvg">

	<div class="BannerMedia">

		<slot name="hasvideo">
			<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<g>
					{#each { length: $tweenedCount } as _, index (index)}
						<circle
							r={dotsize}
							cx={Math.cos(index * angle * 2 * Math.PI) * index * 0.2}
							cy={Math.sin(index * angle * 2 * Math.PI) * index * 0.2} />
					{/each}
				</g>
			</svg>
		</slot>
	</div>

	<div class="PhiSvgText">

		<div class="controls">
			<input type="number" bind:value={angle} step="0.001" />
			<input type="range" bind:value={$tweenedCount} min={0} max={numDots} />
		</div>
	
		<List tipo={3} variante={5}>
			<ListItem tipo={3} 
			variante={6}
			on:click={() => {
				$tweenedCount = $tweenedCount > 0 ? 0 : numDots;
			}}>
				Play
			</ListItem>
		</List>
	</div>

</main>
