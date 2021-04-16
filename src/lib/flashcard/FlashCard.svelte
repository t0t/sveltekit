<script>
	export let back_txt;
	export let code;
	export let foto;
	export let showCarBack;
	// import Prism from '$lib/Code/PrismJS.svelte';
</script>

<div class="col_5 backFlipBox" class:NoRebelesTxt={showCarBack}>
	<h2>{back_txt}</h2>
	<code class="code language-">{code}</code>
</div>

<div class="col_8 frontFlipBox">
	<div class="image" style="background-image: url({foto})" />
</div>

<style>
	@keyframes revealTextSlowly {
		to {
			color: black;
		}
	}

	.frontFlipBox,
	.backFlipBox {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		/* Safari */
		backface-visibility: hidden;
	}

	.backFlipBox {
		color: black;
		transform: rotateY(180deg);
	}

	.image {
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		width: 100%;
		height: 80%;
	}
	.code {
		width: 100%;
		height: 100%;
	}

	.NoRebelesTxt {
		animation: revealTextSlowly 1s forwards;
	}
</style>
