<script>
    import Section from "$lib/Section.svelte";
    import PhiSvg from '$lib/lab/PhiSvg/PhiSvg.svelte';
    import T0T from '$lib/lab/T0T/T0T.svelte';
    import Gematria from '$lib/lab/GematriaApp/Gematria.svelte';
</script>

<!-- LAB Experiments-->
<Section id="phi" variante={1}>
	<PhiSvg variante={2} title="phi title" text="testttt" />
</Section>

<Section id="t0t" variante={4}>
	<T0T />
</Section>

<Section id="gematria" variante={0}>
	<Gematria />
</Section>