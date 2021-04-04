<script>
	import QuoteRotator from '$lib/quoterotator/QuoteRotator.svelte';
	import Skillsbar from "$lib/skillsbar/Skillsbar.svelte";
	import CtaBanner from "$lib/ctabanner/CtaBanner.svelte";
	import Section from "$lib/Section.svelte";
</script>

<Section id="quoterotator" variante={1}>
	<QuoteRotator />
</Section>

<Section id="skillsbar" variante={0}>
	<Skillsbar />
</Section>

<Section id="ctabanner" variante={1}>
	<CtaBanner />
</Section>
