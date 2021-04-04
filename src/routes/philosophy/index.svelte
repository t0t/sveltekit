<script>
    import { coverData } from "$lib/data/coverData.js";	
    import Cover from "$lib/Cover.svelte";
    import Section from "$lib/Section.svelte";
    import TabHeaders from "$lib/tabheaders/TabHeaders.svelte";
</script>

<Section id="cover" variante={1}>
	<Cover
		title={coverData[3].title}
		subtitle={coverData[3].subtitle}
		text={coverData[3].text}
		img={coverData[3].img}
	/>
</Section>

<Section id="tabheaders" variante={1}>
	<TabHeaders />
</Section>
