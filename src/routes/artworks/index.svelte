<script>
	import { coverData } from "$lib/data/coverData.js";	
	// import FlipCard from "$lib/flashcard/FlipCard.svelte"
	// import SlideGallery from "$lib/slidegallery/SlideGallery.svelte"
	import LightboxGallery from "$lib/lightboxgallery/LightboxGallery.svelte"
	import Cover from "$lib/Cover.svelte";
	import Section from "$lib/Section.svelte";
	import GridBase from "$lib/GridBase.svelte";
</script>

<Section id="cover" variante={3}>
	<Cover
		title={coverData[1].title}
		subtitle={coverData[1].subtitle}
		text={coverData[1].text}
		img={coverData[1].img}
	/>
</Section>

<!-- <Section id="slidegallery" variante={0}>
	<SlideGallery/>
</Section> -->

<Section variante={2}>
	<GridBase variante={4}>

		<video poster="/img/cover3.jpg" loop playsinline controls="controls">
			<source
				src="/img/desdelapoesiadelamateria.webm"
				type="video/webm" />
			<source
				src="/img/desdelapoesiadelamateria.mp4"
				type="video/mp4" />
			<p>Ups! Su navegador no soporta vídeos HTML5.</p>
		</video>
		
		<div slot="subarea1">
			<p>Desde la poesía de la materia</p>
		</div>

		<div slot="subarea2">
			<p>Todo son formas de arte simbólicas en si mismas y, como tales, cumplen una función mediadora capaz de abrirle lo real a la conciencia.</p>
		</div>
	</GridBase>
</Section>

<Section id="lightboxgallery" variante={3}>
	<LightboxGallery/>
</Section>

<!-- <Section id="flipcard" variante={2}>
	<FlipCard/>
</Section> -->