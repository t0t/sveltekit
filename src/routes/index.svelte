<script>
	import { coverData } from "$lib/data/coverData.js";	
	import { secondaryNav } from "$lib/data/pages.js";

	import Section from "$lib/Section.svelte";
	import Cover from "$lib/Cover.svelte";
	import Grid from "$lib/Grid.svelte";
	import Blockquote from "$lib/Blockquote.svelte";
	import QuoteRotator from '$lib/quoterotator/QuoteRotator.svelte';
	import Img from "$lib/Img.svelte";
	import Button from "$lib/Button.svelte";
	import Header from "$lib/Header.svelte";
	import NavSecondary from "$lib/NavSecondary.svelte";
</script>

<!-- Cover -->
<div class="dg">

	<div class="col_5 bgc_primary c_5 mh_0">
		<Header tipo={2}
		variante={6}
		textalign = "align-left"
		title="Sergio Forés"
		subtitle={coverData[0].subtitle}/>
	</div>

	<div class="col_8">
		<NavSecondary {secondaryNav} 
		variante_item={1}
		variante_list={6} />
	</div>

	<div class="col_13 mh_0">
		<QuoteRotator />
	</div>

</div>

<div class="dg p_3 bgc_primary">

	<div class="col_8 c_5">
		<Blockquote variante={1}
		text="Percibir la conexión esencial de todo"/>
	</div>

	<div class="col_5">
		<Img variante={1}
		src="./img/02234-14.jpg" 
		alt="Presentation"/>
	</div>
</div>

	<div class="col_13 mh_0 dg_0 pcc bgc_0 c_4 tac">
		<Blockquote
			variante={1}
			text="Puedes obtener más información contactándome en las redes o por Whatsapp"/>
		<Button 
			variante={7}
			text="Chat-Whatsapp"
			url="https://api.whatsapp.com/send?phone=+34619549032" />
	</div>

	


