<script>
	import Lightbox from './Lightbox.svelte';
	import Button from '$lib/Button.svelte';
	import ImageDisplay from './ImageDisplay.svelte';

	let modalOpen = false;

	let imageShowingIndex = 0;

	const handleImgClick = (e) => {
		imageShowingIndex = Number(e.target.id);
		modalOpen = true;
	};
</script>

<style lang="scss">
	@use "../../app.scss"as *;

	aside {
		display: grid;
		place-items: center;
		padding-bottom: $h3;
	}

	/* .container {
		position: relative;
	} */
</style>

<!-- The Modal/Lightbox -->
{#if modalOpen}
	<Lightbox on:click={() => (modalOpen = false)} {imageShowingIndex} />
{:else}
	<ImageDisplay on:click={handleImgClick} />
{/if}

<!-- Button to open Lightbox -->
<aside>
	<Button variante={7} text="View gallery" on:click={() => (modalOpen = true)} />
</aside>

