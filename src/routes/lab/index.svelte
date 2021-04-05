<script>
    import { coverData } from "$lib/data/coverData.js";	
    import Cover from "$lib/Cover.svelte";
    import Section from "$lib/Section.svelte";
    import PhiSvg from '$lib/lab/PhiSvg/PhiSvg.svelte';
    import T0T from '$lib/lab/T0T/T0T.svelte';
    import Gematria from '$lib/lab/GematriaApp/Gematria.svelte';
</script>

<Section id="cover" variante={1}>
	<Cover
		title={coverData[2].title}
		subtitle={coverData[2].subtitle}
		text={coverData[2].text}
		img={coverData[2].img}
	/>
</Section>

<!-- LAB Experiments-->
<Section id="phi" variante={1}>
	<PhiSvg variante={2} title="La Divina Proporción" text="<p>Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>" />
</Section>

<Section id="t0t" variante={1}>
	<T0T />
</Section>

<Section id="gematria" variante={2}>
	<Gematria />
</Section>