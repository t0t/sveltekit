<script>
    import { coverData } from "$lib/data/coverData.js";	
    import Header from "$lib/Header.svelte";
    import Section from "$lib/Section.svelte";
    import PhiSvg from '$lib/lab/PhiSvg/PhiSvg.svelte';
    import T0T from '$lib/lab/T0T/T0T.svelte';
    import Gematria from '$lib/lab/GematriaApp/Gematria.svelte';
</script>

<!-- LAB Experiments-->
<div class="dg">
	<div class="col_13 dg_0 mh_0 bgc_primary c_5 tac">
		<Header
		tipo={1}
		variante={1}
		title={coverData[2].title}
		subtitle={coverData[2].subtitle}
		text={coverData[2].text}
	/>
	</div>
	<div class="col_13">
		<PhiSvg title="La Divina Proporción" text="<p>Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>" />
	</div>
</div>

<!-- T0T -->
<Section id="t0t" variante={0}>
	<T0T />
</Section>

<!-- Gematria App -->
<Section id="gematria" variante={4}>
	<Gematria />
</Section>