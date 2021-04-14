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

	// let data = []
	// data = [...contentSliderData, data]
</script>

<!-- Cover -->
<Grid tipo={2} variante={7}>
	<svelte:fragment slot="slot_3">
		<Header tipo={2}
		variante={6}
		textalign = "align-left"
		title="Sergio Forés"
		subtitle={coverData[0].subtitle}/>
	</svelte:fragment>

	<svelte:fragment slot="slot_5">
		<NavSecondary 	{secondaryNav} 
		variante_item={1}
		variante_list={6} />
	</svelte:fragment>
	
	<svelte:fragment slot="slot_4">
		<QuoteRotator />
	</svelte:fragment>
	
	<svelte:fragment slot="slot_2">
	</svelte:fragment>

	<svelte:fragment slot="slot_1"></svelte:fragment>
</Grid>

<Grid tipo={2} variante={7}>
	<svelte:fragment slot="slot_3">
		<Blockquote
			variante={1}
			color="grey_1"
			align = "tal"
			text="Percibir la conexión esencial de todo"/>
	</svelte:fragment>

	<svelte:fragment slot="slot_4">
		<Img 	variante={1}
				src="./img/02234-14.jpg" 
				alt="Presentation"
		/>
	</svelte:fragment>
	
	<svelte:fragment slot="slot_2"></svelte:fragment>
	
	<svelte:fragment slot="slot_5">
		<Section variante={0} bg_color="bggrey_1">
			<Blockquote
			variante={1}
			color="grey_5"
			text="Puedes obtener más información contactándome en las redes o por Whatsapp"/>
		<Button 
			variante={7}
			text="Chat-Whatsapp"
			url="https://api.whatsapp.com/send?phone=+34619549032" />
		</Section>
	</svelte:fragment>
	
	<svelte:fragment slot="slot_1">
		<div class="bggrey_3 fullfill"></div>
	</svelte:fragment>
</Grid>