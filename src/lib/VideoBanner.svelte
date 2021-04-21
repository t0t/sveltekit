<script>
	export let clases = ""
</script>

<div class="video-wrapper {clases}">
	<video poster="/img/cover3.jpg" loop playsinline controls="controls">
		<source src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
		<source src="/img/desdelapoesiadelamateria.mp4" type="video/mp4" />
		<p>Ups! Su navegador no soporta vídeos HTML5.</p>
	</video>
</div>

<style lang="scss">
	@use "../app.scss" as *;
	
	.video-wrapper {}

	video {
		grid-column-start: span 2;
		@include media(s2) {
			grid-column-start: 2;
			grid-column-end: 3;
		}
	}
</style>
