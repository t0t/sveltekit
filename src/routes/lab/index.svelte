<script>
<<<<<<< HEAD
    import { coverData } from "$lib/data/coverData.js";	
    import Header from "$lib/Header.svelte";
    import Section from "$lib/Section.svelte";
    import PhiSvg from '$lib/lab/PhiSvg/PhiSvg.svelte';
    import T0T from '$lib/lab/T0T/T0T.svelte';
    import Gematria from '$lib/lab/GematriaApp/Gematria.svelte';
    // import ThreeBanner from '$lib/lab/ThreeBanner/ThreeBanner.svelte';
=======
	import { coverData } from '$lib/data/coverData.js';
	import Header from '$lib/Header.svelte';
	import Section from '$lib/Section.svelte';
	import PhiSvg from '$lib/lab/PhiSvg/PhiSvg.svelte';
	import T0T from '$lib/lab/T0T/T0T.svelte';
	import Gematria from '$lib/lab/GematriaApp/Gematria.svelte';
>>>>>>> main
</script>

<!-- LAB Experiments-->
<div class="dg">
	<div class="col_13 p_3 dg_0 mh_0 pcc bgc_0 c_5 mh_2 tac">
		<Header
			tipo={1}
			variante={1}
			title={coverData[2].title}
			subtitle={coverData[2].subtitle}
			text={coverData[2].text}
		/>
	</div>
</div>

<!-- PhiSvg -->
<PhiSvg
	title="La Divina Proporción"
	text="<p>Sentir el Orden da Forma a la Conexión. Diseño generativo en <code>JS</code> y <code>SVG</code> de la proporción áurea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>"
/>

<!-- T0T -->
<Section id="t0t">
	<T0T />
</Section>

<!-- Gematria App -->
<<<<<<< HEAD
<Section id="gematria" variante={4}>
	<Gematria />
</Section>

<!-- <Section id="threebanner" variante={1}>
	<ThreeBanner variante={3} title="efe" text="rgr" />
</Section> -->
=======
<Gematria />
>>>>>>> main
