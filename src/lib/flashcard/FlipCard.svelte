<script>
	import {
		flashCard
	} from "$lib/data/flashCard.js";

	import FlashCard from "./FlashCard.svelte";
	import Button from "$lib/Button.svelte";


	const toggleShowBack = () => showCarBack = !showCarBack
	let showCarBack = false
	let image_index = 0
	$: foto = flashCard[image_index].image
	$: back_txt = flashCard[image_index].word
	const prevCard = () => {
		showCarBack = false
		if (image_index === 0) {
			image_index = flashCard.length - 1
		} else {
			image_index -= 1
		}
	}
	const nextCard = () => {
		showCarBack = false
		if (image_index === flashCard.length - 1) {
			image_index = 0
		} else {
			image_index += 1
		}
	}
</script>

<div class="flip-box">

	<div class="flip-box-inner" class:flip-it={showCarBack}>
		<FlashCard {showCarBack} {foto} {back_txt} />
	</div>

	<div class="ButtonControls">
		<Button
			on:click={prevCard}
            variante={4}
            text="↜"
        />
		<Button
		on:click={toggleShowBack}
		variante={4}
		text={showCarBack ? '⤿' : '⤾'}
        />
		<Button
			on:click={nextCard}
            variante={4}
            text="⤳"
        />
	</div>

</div>

<style lang="scss">	
	@use "../../app.scss" as *;

	.ButtonControls {
		display: grid;
		gap: $h0;
    	grid-template-columns: 1fr 2fr 1fr;
	}
	.flip-box {
		background-color: transparent;
		width: 300px;
		height: 200px;
		perspective: 1000px;
		/* Remove this if you don't want the 3D effect */
	}

	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.3s;
		transform-style: preserve-3d;
	}

	.flip-it {
		transform: rotateY(180deg);
	}
</style>