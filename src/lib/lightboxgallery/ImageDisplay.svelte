<script>
	import { fade, fly } from 'svelte/transition';
	import { images } from '$lib/data/imageData.js';
</script>

<style lang="scss">
	@use "../../app.scss" as *;

	.DemoGallery {
		padding: $h3;
		text-align: center;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: $h2;

		@include media(s2) {
			grid-template-columns: repeat(auto-fill, minmax(133px, 20%));
			place-content: center;
			gap: $h2;
		}
	}
	
	img {
		border-radius: 50%;
		transition: .2s;
		cursor: pointer;
		place-self: center;
		
		@include media(s2) {
			margin: $h2;
			/* max-width: 50vw; */
		}
	}
	
	@include media(s2) {
		img:hover {   
			box-shadow: 0 $h1 $h2 rgba($grey_5, 0.5);
			transform: scale(1.05);
		}
	}
</style>


<!-- Image Row -->
<div class="DemoGallery">
	{#each images as {id, imgurl, name}}
		<img {id} src={imgurl} alt={name} on:click />
	{/each}
</div>
