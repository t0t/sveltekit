<script>
	// import ProductGallery from "$lib/productgallery/ProductGallery.svelte"
	import FlipCard from "$lib/flashcard/FlipCard.svelte"
	import SlideGallery from "$lib/slidegallery/SlideGallery.svelte"
	import LightboxGallery from "$lib/lightboxgallery/LightboxGallery.svelte"
	import Section from "$lib/Section.svelte";

</script>

<Section id="slidegallery" variante={0}>
	<SlideGallery/>
</Section>

<Section id="lightboxgallery" variante={2}>
	<LightboxGallery/>
</Section>

<Section id="flipcard" variante={2}>
	<FlipCard/>
</Section>

<style>

</style>