<script>
	import { quotes } from '$lib/data/quoteData.js';
	import Quote from './Quote.svelte';
	import Dot from './Dot.svelte';
	import AutoPlayBtn from './AutoPlayBtn.svelte';

	export let clases = "";
	/* ADVANCE QUOTE */
	let quoteIndex = 0;
	$: quote = quotes[quoteIndex].quote;
	$: author = quotes[quoteIndex].author;
	$: image = quotes[quoteIndex].image;

	const nextQuote = () => {
		if (quoteIndex === quotes.length - 1) {
			quoteIndex = 0;
		} else {
			quoteIndex += 1;
		}
	};

	const prevQuote = () => {
		if (quoteIndex === 0) {
			quoteIndex = quotes.length - 1;
		} else {
			quoteIndex -= 1;
		}
	};

	/* AUTO PLAY */
	let switchOn = false;
	let autoAdvance;
	let autoPlaying = false;

	const handleAutoAdv = () => {
		if (switchOn) {
			autoAdvance = setInterval(nextQuote, 5000);
			autoPlaying = true;
		} else {
			clearInterval(autoAdvance);
			autoPlaying = false;
		}
	};
</script>

<div class="slideshow-container {clases}">
	<!-- THE QUOTE -->
	{#key quote}
		<Quote {quote} {author} {image} />
	{/key}

	<!-- Next/prev buttons -->
	<span
		href="#prev"
		class="prev"
		class:not-clickable={autoPlaying}
		title="previous quote"
		on:click={prevQuote}>&#10094;</span
	>

	<span
		href="#next"
		class="next"
		class:not-clickable={autoPlaying}
		title="next quote"
		on:click={nextQuote}>&#10095;</span
	>

	<!-- Dots/bullets/indicators -->
	<div class="dot-container">
		{#each quotes as quote, i}
			<Dot
				counter={i}
				{quoteIndex}
				{autoPlaying}
				attribution={quote.author}
				on:click={() => (quoteIndex = i)}
			/>
		{/each}

		<AutoPlayBtn bind:switchOn on:change={handleAutoAdv} />
	</div>
</div>

<style lang="scss">
	@use "../../app.scss" as *;

	/* Slideshow container */
	.slideshow-container {
		position: relative;
		/* height: 100%; */
	}

	/* The dot/bullet/indicator container */
	.dot-container {
		display: none;
		@include media(s2) {
			position: absolute;
			height: 50vh;
			top: 0;
			width: 10vw;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax($h0, 1fr) );
			padding-bottom: $h2;
			/* justify-content: space-evenly; */
			place-items: center;
			/* place-content: center; */
			justify-self: center;
			align-items: end;
		}
	}

	/* Next & previous buttons */
	.prev,
	.next {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		height: 50vh;
		width: $h4;
		cursor: pointer;
		color: $grey_0;
		font-weight: bold;
		@include type-setting(1);
		user-select: none;
	}

	.prev {
		left: 0;
	}

	.next {
		position: absolute;
		right: 0;
	}

	.prev:hover,
	.next:hover {
		background-color: rgba($black, 0.5);
		color: $white;
		text-decoration: none;
	}
</style>
