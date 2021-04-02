<script>
	import { quotes } from './quoteData.js';
	import Quote from './Quote.svelte';
	import Dot from './Dot.svelte';
	import AutoPlayBtn from './AutoPlayBtn.svelte';
	
	/* ADVANCE QUOTE */
	let quoteIndex = 0;
	$: console.log(quoteIndex)
	$: quote = quotes[quoteIndex].quote;
	$: author = quotes[quoteIndex].author;
	$: console.log(quoteIndex)
	
	const nextQuote = () => {
		if (quoteIndex === quotes.length-1) {
			quoteIndex = 0;
		} else {
			quoteIndex += 1;
		}		
	}
	
	const prevQuote = () => {
		if (quoteIndex === 0) {
			quoteIndex = quotes.length-1;
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

<main>
	<div class="slideshow-container">

		<!-- THE QUOTE -->
		{#key quote}
			<Quote {quote} {author} />
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
</main>	

<style lang="scss">	
	@use "../../app.scss" as *;

	main {
		width: 100%;
		height: auto;
	}
	
	/* Slideshow container */
	.slideshow-container {
		position: relative;
		background-color: $grey_1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 250px;
	}

	/* The dot/bullet/indicator container */
	.dot-container {
		text-align: center;
		padding: 20px;
		background: $grey_2;
		position: relative;
		bottom: 0;
	}
	

	/* Next & previous buttons */
	.prev, .next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -30px;
		padding: 16px;
		color: grey_4;
		font-weight: bold;
		font-size: 20px;
		border-radius: 0 3px 3px 0;
		user-select: none;
	}
	
	.prev {
		left: 0;
	}

	/* Position the "next button" to the right */
	.next {
		position: absolute;
		right: 0;
		border-radius: 3px 0 0 3px;
	}

	/* On hover, add a black background color with a little bit see-through */
	.prev:hover, .next:hover {
		background-color: rgba($black,0.8);
		color: $white;
		text-decoration: none;
	}	
	
	.not-clickable {
		pointer-events: none;
	}
</style>