<script>
	import { coverData } from "$lib/data/coverData.js";	
	import FlipCard from "$lib/flashcard/FlipCard.svelte"
	import SlideGallery from "$lib/slidegallery/SlideGallery.svelte"
	import LightboxGallery from "$lib/lightboxgallery/LightboxGallery.svelte"
	import Cover from "$lib/Cover.svelte";
	import Section from "$lib/Section.svelte";
</script>

<Section id="cover" variante={3}>
	<Cover
		title={coverData[1].title}
		subtitle={coverData[1].subtitle}
		text={coverData[1].text}
		img={coverData[1].img}
	/>
</Section>

<Section id="slidegallery" variante={0}>
	<SlideGallery/>
</Section>

<Section id="lightboxgallery" variante={3}>
	<LightboxGallery/>
</Section>

<Section id="flipcard" variante={2}>
	<FlipCard/>
</Section>