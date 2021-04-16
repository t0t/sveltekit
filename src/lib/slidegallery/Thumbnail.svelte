<script>
	export let thumbImg;
	export let altTag;
	export let titleLink;
	export let id;
	export let selected;
</script>

<div class="thumbnail-cont">
	<img
		class="sample cursor"
		class:active={selected}
		{id}
		src={thumbImg}
		alt={altTag}
		title="Image from {titleLink}"
		on:click
	/>
</div>

<style lang="scss">
	@use "../../app.scss"as *;

	/* Six columns side by side */
	.thumbnail-cont {
		width: 16.66%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* Add a transparency effect for thumnbail images */
	.sample {
		opacity: 0.4;
	}

	.sample:hover {
		opacity: 1;
	}

	img {
		padding: $h0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transition: all 0.1s ease-in-out;
	}

	/* Add a pointer when hovering over the thumbnail images */
	.cursor {
		cursor: pointer;
	}

	.active {
		opacity: 1;
		border: 1px dotted $grey_4;
		width: 85%;
		height: 85%;
	}
</style>
