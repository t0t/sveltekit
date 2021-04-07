<script>
	import { images } from '$lib/data/imageData.js';
	import Slide from './Slide.svelte';
	import Thumbnail from './Thumbnail.svelte';
	import Caption from './Caption.svelte';

	/* IMAGE TO SHOW */
	let imageShowingIndex = 0;
	$: image = images[imageShowingIndex];

	const nextSlide = () => {
		if (imageShowingIndex === images.length - 1) {
			imageShowingIndex = 0;
		} else {
			imageShowingIndex += 1;
		}
	};

	const prevSlide = () => {
		if (imageShowingIndex === 0) {
			imageShowingIndex = images.length - 1;
		} else {
			imageShowingIndex -= 1;
		}
	};

	const goToSlide = (number) => (imageShowingIndex = number);
</script>

	<!-- image gallery -->
	<div class="container">
		<Slide
			image={image.imgurl}
			altTag={image.name}
			attr={image.attribution}
			slideNo={image.id + 1}
			totalSlides={images.length}
		/>
	</div>

	<!-- Image text -->
	<Caption
		caption={images[imageShowingIndex].name}
		on:prevClick={prevSlide}
		on:nextClick={nextSlide}
	/>

	<!-- Thumbnail images -->
	<div class="thumbnails-row">
		{#each images as { id, imgurl, name, attribution }}
			<Thumbnail
				thumbImg={imgurl}
				altTag={name}
				titleLink={attribution}
				{id}
				selected={imageShowingIndex === id}
				on:click={() => goToSlide(id)}
			/>
		{/each}
	</div>

<style>

	/* Position the image container (needed to position the left and right arrows) */
	.container {
		position: relative;
	}

	.thumbnails-row {
		width: 100%;
		display: flex;
		align-self: flex-end;
	}
</style>
