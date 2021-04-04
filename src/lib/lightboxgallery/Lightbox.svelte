<script>
	import { fade, fly } from 'svelte/transition';
	import { images } from '$lib/data/imageData.js';
	import Slide from './Slide.svelte';
	import Thumbnail from './Thumbnail.svelte';
	import Caption from './Caption.svelte';

	/* IMAGE TO SHOW */
	export let imageShowingIndex = 0;
	$: console.log(imageShowingIndex);
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

<section class="lightbox" in:fly={{ x: -300 }} out:fade>
	<span class="close cursor" on:click>&#10007;</span>

	<main>
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
	</main>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap');

	* {
		box-sizing: border-box;
		font-family: 'Josefin Sans', sans-serif;
	}

	.lightbox {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	main {
		width: 50vw;
		display: flex;
		flex-direction: column;
		background-color: #000;
	}

	/* Position the image container (needed to position the left and right arrows) */
	.container {
		position: relative;
	}

	.thumbnails-row {
		width: 100%;
		display: flex;
		align-self: flex-end;
	}

	/* The Close Button */
	.close {
		color: #ddd;
		position: absolute;
		top: 3%;
		right: 3%;
		font-size: 1.5rem;
		font-weight: 200;
	}

	.close:hover,
	.close:focus {
		color: #999;
		text-decoration: none;
		cursor: pointer;
	}
</style>
