<script>
    import { coverData } from "$lib/data/coverData.js";	
    import Header from "$lib/Header.svelte";
    import Section from "$lib/Section.svelte";
    import PhiSvg from '$lib/lab/PhiSvg/PhiSvg.svelte';
    import T0T from '$lib/lab/T0T/T0T.svelte';
    import Gematria from '$lib/lab/GematriaApp/Gematria.svelte';
    // import ThreeBanner from '$lib/lab/ThreeBanner/ThreeBanner.svelte';
</script>

<!-- LAB Experiments-->
<Section id="cover" variante={3}>
	<Header
		tipo={1}
		variante={1}
		title={coverData[2].title}
		subtitle={coverData[2].subtitle}
		text={coverData[2].text}
	/>
</Section>

<!-- Phi SVG -->
<Section id="phi" variante={2}>
	<PhiSvg title="La Divina Proporción" text="<p>Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>" />
</Section>

<!-- T0T -->
<Section id="t0t" variante={0}>
	<T0T />
</Section>

<!-- Gematria App -->
<Section id="gematria" variante={4}>
	<Gematria />
</Section>

<!-- <Section id="threebanner" variante={1}>
	<ThreeBanner variante={3} title="efe" text="rgr" />
</Section> -->