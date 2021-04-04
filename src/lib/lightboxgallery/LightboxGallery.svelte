<script>
	import Lightbox from './Lightbox.svelte';
	  import ImageDisplay from './ImageDisplay.svelte';
	  
	  let modalOpen = false;
	  // $: console.log(modalOpen);
	  
	  let imageShowingIndex = 0;
	  
	  const handleImgClick = (e) => {
		  imageShowingIndex = Number(e.target.id);
		  modalOpen = true;
	  }
	  
  </script>
  
  <!-- The Modal/Lightbox -->
  {#if modalOpen}
	  <Lightbox on:click={() => modalOpen = false} {imageShowingIndex} />
  {:else}
	  <ImageDisplay on:click={handleImgClick} />	
  {/if}
	  
  <!-- Button to open Lightbox -->		
  <section>		
	  <button on:click={() => modalOpen = true}>
		  Lightbox
	  </button>		
  </section>

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
