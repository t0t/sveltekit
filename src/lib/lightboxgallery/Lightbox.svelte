<script>
	import { fade, fly } from 'svelte/transition';
	import { images } from '$lib/data/imageData.js';
	import Slide from './Slide.svelte';
	import Thumbnail from './Thumbnail.svelte';
	import Caption from './Caption.svelte';

	/* IMAGE TO SHOW */
	export let imageShowingIndex = 0;
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

	const goToSlide = (slideID) => (imageShowingIndex = Number(slideID));
</script>

<div class="lightbox" in:fly={{ x: -300 }} out:fade>
	<span class="close cursor" on:click>&#10007;</span>

	<!-- image gallery -->
	<Slide
		image={image.imgurl}
		altTag={image.name}
		attr={image.description}
		slideNo={image.id + 1}
		totalSlides={images.length}
	/>

	<!-- Image text -->
	<Caption
		caption={images[imageShowingIndex].description}
		on:prevClick={prevSlide}
		on:nextClick={nextSlide}
	/>

	<!-- Thumbnail images -->
	<div class="Thumbnails">
		{#each images as { id, imgurl, name }}
			<Thumbnail
				thumbImg={imgurl}
				altTag={name}
				{id}
				selected={Number(imageShowingIndex) === id}
				on:click={() => goToSlide(id)}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	@use "../../app.scss"as *;

	.lightbox {
		position: fixed;
		z-index: 9999;
		left: 0;
		top: 0;
		display: grid;
		grid-template-areas: 
			"slide thumb"
			"slide thumb"
			"captio thumb"
		;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-color: $grey_5;

		@include media(s3) {
			overflow: auto;
			grid-template-areas: 
				"captio slide thumb"
			;
		}
	}

	.Thumbnails {
		grid-area: thumb;
		width: $h4;
		margin-top: $h4;
		overflow-y: auto;
    	/* height: 60vh; */
		@include media(s2) {
			width: $h5;
			gap: $h2;
			overflow-y: auto;
		}
	}

	/* The Close Button */
	.close {
		padding: $h1;
		color: $highlight;
		position: absolute;
		z-index: 1000;
		top: $h0;
		right: $h1;
		@include type-setting(1);
	}

	.close:hover,
	.close:focus {
		color: $grey_0;
		cursor: pointer;
	}
</style>
