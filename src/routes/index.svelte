<script>
	import { coverData } from "$lib/data/coverData.js";	
	import Section from "$lib/Section.svelte";
	// import GridBase from "$lib/GridBase.svelte";
	import QuoteRotator from '$lib/quoterotator/QuoteRotator.svelte';
	import CtaBanner from "$lib/CtaBanner.svelte";
	import Cover from "$lib/Cover.svelte";
	import NavSecondary from "$lib/NavSecondary.svelte";
</script>

<!-- <Section variante={3}>
	<GridBase>
		<div slot="subarea1">header</div>
		<div><p>hole</p></div>
		<div slot="subarea2">footer</div>
	</GridBase>
</Section> -->

<Section id="cover" variante={3}>
	<Cover
		title={coverData[0].title}
		subtitle={coverData[0].subtitle}
		text={coverData[0].text}
		img={coverData[0].img}
	/>
</Section>

<Section id="navsecondary" variante={3}>
	<NavSecondary />
</Section>

<Section id="quoterotator" variante={3}>
	<QuoteRotator />
</Section>

<Section id="ctabanner" variante={2}>
	<CtaBanner />
</Section>
