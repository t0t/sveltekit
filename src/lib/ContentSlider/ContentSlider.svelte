<script>
	import ContentSlide from '$lib/ContentSlider/ContentSlide.svelte';
	import List from '$lib/List/List.svelte';
	import ListItem from '$lib/List/ListItem.svelte';
	import Grid from '$lib/Grid.svelte';

	export let img = '',
		id = 0,
		text = '';
	export let contentSliderData;

	let pos = 0;
	const nextSlide = () => {
		if (pos < (contentSliderData.length - 1) * 100) {
			pos += 100;
		} else {
			pos = 0;
		}
	};
	const prevSlide = () => {
		pos -= 100;
	};
</script>

<Grid tipo={1} variante={6}>
	<div class="slides" style="transform: translate(-{pos}vw)">
		{#each contentSliderData as { img, text }}
			<article class="slide" style="background-image:url('{img}')">
				<h3>{text}</h3>
			</article>
		{/each}
	</div>

	<span slot="subarea1" />

	<span slot="subarea2">
		<List tipo={3} variante={7}>
			<ListItem tipo={3} variante={8} on:click={nextSlide}>
				<span class="next"> + </span>
			</ListItem>
			{#if pos != 0}
				<ListItem tipo={3} variante={8} on:click={prevSlide}>
					<span class="prev"> - </span>
				</ListItem>
			{/if}
		</List>
	</span>
	<span slot="subarea3" />
	<span slot="subarea4" />
	<span slot="subarea5" />
	<span slot="subarea6" />
</Grid>

<style lang="scss">
	@use "../../app.scss" as *;

	.slider {
		position: relative;
	}

	.slides {
		// overflow-y: auto;
		display: grid;
		grid-auto-flow: column;
		width: 100vw;
		transition: transform 0.3s ease;
		h3 {
			@include type-setting(1);
			position: absolute;
			z-index: 10;
		}
	}
	.slide {
		width: 100vw;
		min-height: 43.2vh;
		background-size: cover;
		position: relative;
	}

	.slide-content {
		/* background-color: rgba(255,255,255,0.7); */
		/* padding: $h2; */
		height: 100%;
		width: 50%;
		p {
			color: $white;
			@include type-setting(0);
		}
	}
</style>
