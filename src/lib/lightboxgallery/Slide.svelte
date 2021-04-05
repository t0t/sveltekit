<script>	
	export let slideNo;
	export let totalSlides;
	export let image;
	export let altTag;
	export let description;
</script>

<style lang="scss">
	@use "../../app.scss"as *;

	.Slide {
		position: relative;
		text-align: center;
		grid-area: slide;
		padding-top: $h2;
		overflow-y: auto;
		/* background-color: $black; */
	}

	/* Number text (1/3 etc) */
	.numbertext {
		color: $grey_2;
		position: absolute;
		top: $h2;
		left: $h2;
	}
	
	img {
		width: 90%;
		border-radius: 50%;
		@include media(s2) {
			width: auto;
			max-height: 90vh;	
		}
	}
</style>


<!-- Full-width images with number text -->
<div class="Slide">
	<div class="numbertext">{slideNo} / {totalSlides}</div>
	<img src={image} alt={altTag} title={description}>
</div>