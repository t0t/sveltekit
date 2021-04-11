<script>
	import { contentSliderData } from "$lib/data/contentSliderData.js"
	import ContentSlide from "$lib/ContentSlider/ContentSlide.svelte"
	import List from "$lib/List/List.svelte"
	import ListItem from "$lib/List/ListItem.svelte"

	let pos = 0
    const nextSlide = () => {
		if (pos < (contentSliderData.length - 1) * 100) { pos += 100; } else { pos = 0; }
	};
	const prevSlide = () => pos -= 100
</script>

<div class="slider">
	<div class="slides" style="transform:translate(-{pos}vw)">

		{#each contentSliderData as { img, id, text }}
			<ContentSlide {img} {id} {text} />
		{/each}
    
	</div>

    <List tipo={3} variante={7}>
        <ListItem tipo={3} variante={8}>
            <button class="next" 
            on:click={nextSlide}> + </button>
        </ListItem>
        {#if pos != 0}
            <ListItem tipo={3} variante={8}>
                <button class="prev" 
                on:click={prevSlide}> - </button>
            </ListItem>
        {/if}
    </List>
</div>

<style lang="scss">
	@use "../../app.scss" as *;

	.slider {
		position: relative;
        overflow-x: auto;
	}

	.slides {
		display: grid;
		grid-auto-flow: column;
		width: 100vw;
		transition: transform .3s ease;
	}
</style>