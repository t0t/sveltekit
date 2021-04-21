<script>
	import { coverData } from '$lib/data/coverData.js';
	import { secondaryNav } from '$lib/data/pages.js';

	// import Section from '$lib/Section.svelte';
	// import Cover from '$lib/Cover.svelte';
	// import Grid from '$lib/Grid.svelte';
	import Blockquote from '$lib/Blockquote.svelte';
	import QuoteRotator from '$lib/quoterotator/QuoteRotator.svelte';
	import Img from '$lib/Img.svelte';
	import Button from '$lib/Button.svelte';
	import Header from '$lib/Header.svelte';
	import NavSecondary from '$lib/NavSecondary.svelte';
</script>

<!-- Cover -->

<Header tipo={2} variante={6} 
clases="dg pcc pt_3 pb_3" title="Sergio Forés" subtitle={coverData[0].subtitle} />

<NavSecondary {secondaryNav} variante_item={1} variante_list={6} />

<div class="mh_5">
	<QuoteRotator />
</div>


<div class="dg p_3 bgc_primary rg_1 mh_s2_5">
	<Blockquote variante={1} text="Percibir la conexión esencial de todo" />

	<Img variante={1} src="./img/02234-14.jpg" alt="Presentation" />
</div>

<div class="col_s2_13 rg_1 p_3 dg_0 pcc bgc_0 c_4 tac mh_2 mh_s2_5">
	<div class="mw_6">
		<Blockquote
			variante={1}
			text="Puedes obtener más información contactándome en las redes o por Whatsapp"
		/>
	</div>
	<Button
		variante={7}
		text="Chat-Whatsapp"
		url="https://api.whatsapp.com/send?phone=+34619549032"
	/>
</div>
