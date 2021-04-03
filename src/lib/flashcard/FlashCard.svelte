<script>
	export let back_txt;
	export let foto;
	export let showCarBack;
</script>

<div class="flip-box-front">
	<div class="image" style="background-image: url({foto})"></div>
</div>

<div class="flip-box-back" class:NoRebelesTxt={showCarBack}>
	<h2>{back_txt}</h2>
</div>
<style>
	@keyframes revealTextSlowly {
		to {
			color: white
		}
	}

	.flip-box-front,
	.flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		/* Safari */
		backface-visibility: hidden;
	}

	.flip-box-front {}

	.flip-box-back {
		color: black;
		transform: rotateY(180deg);
	}

	.image {
		background-size: cover;
		background-position: center;
		background-repeat: none;
		width: 100%;
		height: 100%;
	}

	.NoRebelesTxt {
		animation: revealTextSlowly 1s forwards;
	}
</style>