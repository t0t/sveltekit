<script>
	export let text;
	export let img;
	export let id;
</script>

<div class="slide" style="background-image:url('{img}')">
	<article {id} class="slide-content">
		<p>{text}</p>
	</article>
</div>

<style lang="scss">
	@use "../../app.scss" as *;

	.slide {
		width: 100vw;
		min-height: 60vh;
		background-size: cover;
	}

	.slide-content {
		/* background-color: rgba(255,255,255,0.7); */
		padding: $h2;
		display: flex;
		height: 100%;
		width: 50%;
		p {
			color: $white;
			@include type-setting(0);
		}
	}
</style>
