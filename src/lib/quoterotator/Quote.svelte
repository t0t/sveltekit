<script>
	import { fade } from 'svelte/transition';
	import Blockquote from '$lib/Blockquote.svelte';
	//   export let selectedQuote;
	// 	export let qIndex
	export let quote;
	export let author;
	export let image;
</script>

<!-- Quote template -->
<div class="mySlides dg mh_5 p_3" transition:fade style="background-image: url({image});">
	<Blockquote>
		<q>{quote}</q> <br />
		<span slot="author">&mdash; {author}</span>
	</Blockquote>
</div>

<style lang="scss">
	@use "../../app.scss" as *;

	.mySlides {
		background-size: cover;
		place-items: center;
		width: 100%;
		text-align: center;
		position: absolute;
		/* margin-bottom: $h5; */
		/*	NOTE: Use with #key -- You just need the direct children position to always be in the same place (i.e. fixed), regardless of their position in DOM (well, for this transition at least) */
	}
</style>
