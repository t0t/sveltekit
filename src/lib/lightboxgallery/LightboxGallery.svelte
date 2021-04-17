<script>
	import Lightbox from './Lightbox.svelte';
	import Button from '$lib/Button.svelte';
	import ImageDisplay from './ImageDisplay.svelte';
	export let clases= "";
	let modalOpen = false;

	let imageShowingIndex = 0;

	const handleImgClick = (e) => {
		imageShowingIndex = Number(e.target.id);
		modalOpen = true;
	};
</script>

<!-- The Modal/Lightbox -->
<div class={clases}>
	{#if modalOpen}
		<Lightbox on:click={() => (modalOpen = false)} {imageShowingIndex} />
	{:else}
		<div class="col_13">
			<ImageDisplay on:click={handleImgClick} />
		</div>
	{/if}
	
	<!-- Button to open Lightbox -->
	<aside class="col_13">
		<Button variante={2} text="View All" on:click={() => (modalOpen = true)} />
	</aside>
</div>

<!-- <style lang="scss">
	@use "../../app.scss"as *;
</style> -->
