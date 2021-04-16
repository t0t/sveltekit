<script>
	export let thumbImg;
	export let altTag;
	export let titleLink;
	export let id;
	export let selected;
</script>

<img
	class="sample cursor"
	class:active={selected}
	{id}
	src={thumbImg}
	alt={altTag}
	title={titleLink}
	on:click
/>

<style lang="scss">
	@use "../../app.scss"as *;

	.sample {
		opacity: 0.4;
	}

	.sample:hover {
		opacity: 1;
	}

	img {
		padding: $h0;
		border-radius: 50%;
		transition: all 0.1s ease-in-out;
	}

	.cursor {
		cursor: pointer;
	}

	.active {
		opacity: 1;
		border: 1px dotted $grey_4;
	}
</style>
