<script>
	import { coverData } from "$lib/data/coverData.js";	
	import Section from "$lib/Section.svelte";
	import QuoteRotator from '$lib/quoterotator/QuoteRotator.svelte';
	import CtaBanner from "$lib/ctabanner/CtaBanner.svelte";
	import Cover from "$lib/Cover.svelte";
	import NavSecondary from "$lib/NavSecondary.svelte";
</script>

<Section id="cover" variante={1}>
	<Cover
		title={coverData[0].title}
		subtitle={coverData[0].subtitle}
		text={coverData[0].text}
		img={coverData[0].img}
	/>
</Section>

<Section id="navsecondary" variante={1}>
	<NavSecondary />
</Section>

<Section id="quoterotator" variante={1}>
	<QuoteRotator />
</Section>

<Section id="ctabanner" variante={1}>
	<CtaBanner />
</Section>
