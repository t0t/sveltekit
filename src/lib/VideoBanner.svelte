
<script>
	import GridBase from "$lib/GridBase.svelte";
	import Button from "$lib/Button.svelte";
	import Blockquote from "$lib/Blockquote.svelte";
</script>

<GridBase variante={4}>

	<video poster="/img/cover3.jpg" loop playsinline controls="controls">
		<source
			src="/img/desdelapoesiadelamateria.webm" type="video/webm" />
		<source
			src="/img/desdelapoesiadelamateria.mp4"
			type="video/mp4" />
		<p>Ups! Su navegador no soporta vídeos HTML5.</p>
	</video>
	
	<div slot="subarea1">
		<Blockquote
			align="tar"
			color="primary"
			variante={1}
			text="Todo son formas de arte simbólicas con una función mediadora capaz de abrirle lo real a la conciencia." />
	</div>

	<div slot="subarea2"></div>
</GridBase>