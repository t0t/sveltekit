<script>
	import QuoteRotator from '$lib/quoterotator/QuoteRotator.svelte';
	import FlipCard from "$lib/flashcard/FlipCard.svelte"
	import Skillsbar from "$lib/skillsbar/Skillsbar.svelte";
	import CtaBanner from "$lib/ctabanner/CtaBanner.svelte";
	import Section from "$lib/Section.svelte";
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<Section id="quoterotator" variante={1}>
	<QuoteRotator />
</Section>

<Section id="flipcard" variante={2}>
	<FlipCard/>
</Section>

<Section id="skillsbar" variante={0}>
	<Skillsbar />
</Section>

<Section id="ctabanner" variante={1}>
	<CtaBanner />
</Section>
