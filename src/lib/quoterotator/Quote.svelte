<script>
	import {
		fade
	} from 'svelte/transition';
	//   export let selectedQuote;
	// 	export let qIndex
	export let quote;
	export let author;
	export let image;
</script>

<!-- Quote template -->
<div class="mySlides" transition:fade
style="background-image: url({image});">
	<q>{quote}</q>
	<p class="author">&mdash;{author}</p>
</div>

<style lang="scss">
	@use "../../app.scss" as *;

	.mySlides {
		background-size: cover;
		display: grid;
		place-items: center;
		width: 100%;
		height: inherit;
		text-align: justify;
		position: absolute;
		/*	NOTE: Use with #key -- You just need the direct children position to always be in the same place (i.e. fixed), regardless of their position in DOM (well, for this transition at least) */
	}

	q {
		color: $white;
		align-self: end;
	}
	
	q,
	p {
		max-width: 75%;
		@include type-setting(1);
	}

	.author {
		text-align: right;
		margin: 7px 0;
		color: $grey_1;
	}
</style>