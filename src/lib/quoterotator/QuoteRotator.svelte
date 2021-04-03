<script>
	import {
		quotes
	} from '$lib/data/quoteData.js';
	import Quote from './Quote.svelte';
	import Dot from './Dot.svelte';
	import AutoPlayBtn from './AutoPlayBtn.svelte';

	/* ADVANCE QUOTE */
	let quoteIndex = 0;
	$: console.log(quoteIndex)
	$: quote = quotes[quoteIndex].quote;
	$: author = quotes[quoteIndex].author;
	$: image = quotes[quoteIndex].image;
	$: console.log(quoteIndex)

	const nextQuote = () => {
		if (quoteIndex === quotes.length - 1) {
			quoteIndex = 0;
		} else {
			quoteIndex += 1;
		}
	}

	const prevQuote = () => {
		if (quoteIndex === 0) {
			quoteIndex = quotes.length - 1;
		} else {
			quoteIndex -= 1;
		}
	}

	/* AUTO PLAY */
	let switchOn = false;
	$: console.log(autoAdvance);
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
	}
</script>

<div class="slideshow-container">

		<!-- THE QUOTE -->
		{#key quote}
			<Quote {quote} {author} {image}/>
		{/key}
		
		<!-- Next/prev buttons -->
		<span href="#prev" 
				class="prev" 
				class:not-clickable={autoPlaying}
				title="previous quote" 
				on:click={prevQuote}>&#10094;</span>
		
		<span href="#next" 
				class="next" 
				class:not-clickable={autoPlaying}
				title="next quote" 
				on:click={nextQuote}>&#10095;</span>
	</div>

	<!-- Dots/bullets/indicators -->
	<div class="dot-container">
		{#each quotes as quote, i}
			<Dot counter={i} 
				{quoteIndex}
				{autoPlaying}
				attribution={quote.author}
				on:click={() => quoteIndex = i}/>
		{/each}
		
		<AutoPlayBtn bind:switchOn on:change={handleAutoAdv} />
	</div>

<style lang="scss">	
	@use "../../app.scss" as *;
	
	/* Slideshow container */
	.slideshow-container {
		position: relative;
		background-color: $grey_1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 50vh;
	}

	/* The dot/bullet/indicator container */
	.dot-container {
		text-align: center;
		padding: $h2;
		position: relative;
		bottom: 0;
	}
	
	/* Next & previous buttons */
	.prev, .next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -$h2;
		padding: $h2;
		color: $grey_0;
		font-weight: bold;
		@include type-setting(1);
		border-radius: 0 3px 3px 0;
		user-select: none;
	}
	
	.prev {
		left: 0;
	}

	.next {
		position: absolute;
		right: 0;
		border-radius: 3px 0 0 3px;
	}

	.prev:hover, .next:hover {
		background-color: rgba($black,0.8);
		color: $white;
		text-decoration: none;
	}	
	
	.not-clickable {
		pointer-events: none;
	}
</style>