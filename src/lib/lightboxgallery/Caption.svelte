<script>
	import { createEventDispatcher } from 'svelte';
	export let caption;

	const dispatch = createEventDispatcher();
</script>

<style lang="scss">
	@use "../../app.scss"as *;

	/* Container for image text */
	.caption-container {
		grid-area: captio;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		color: $grey_1;
		background-color: $grey_4;
		align-self: start;
	}

	/* Next & previous buttons */
	.prev,
	.next {
		cursor: pointer;
		width: auto;
		padding: $h1;
		margin-top: 0px;
		color: $grey_2;
		@include type-setting(1);
		user-select: none;
		text-decoration: none;
	}

	/* On hover, add a black background color with a little bit see-through */
	.prev:hover,
	.next:hover {
		color: $grey_0;
	}

	.prev:active,
	.next:active {
		color: $highlight;
	}
	p {
		margin-bottom: 0;
	}
</style>

<div class="caption-container">
	<!-- Previous Arrow -->
	<a href="#arrowL" class="arrow prev" on:click={() => dispatch('prevClick')}>&#10094;</a>
	<!-- Caption -->
	<p id="caption">{caption}</p>
	<!-- Next Arrow -->
	<a href="#arrowR" class="arrow next" on:click={() => dispatch('nextClick')}>&#10095;</a>
</div>
