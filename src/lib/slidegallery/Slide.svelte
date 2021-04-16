<script>
	export let slideNo;
	export let totalSlides;
	export let image;
	export let altTag;
	export let attr;
</script>

<!-- Full-width images with number text -->
<div class="mySlides">
	<div class="numbertext">{slideNo} / {totalSlides}</div>
	<img src={image} alt={altTag} title={attr} />
</div>

<style lang="scss">
	@use "../../app.scss"as *;

	.mySlides {
		text-align: center;
	}

	/* Number text (1/3 etc) */
	.numbertext {
		color: $grey_3;
		padding: 8px 12px;
		position: absolute;
		top: 0;
	}

	img {
		width: 50%;
		border-radius: 50%;
	}
</style>
