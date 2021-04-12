<script>
	import { coverData } from "$lib/data/coverData.js";	
	import { contentSliderData } from "$lib/data/contentSliderData.js"
	import { secondaryNav } from "$lib/data/pages.js";

	import Section from "$lib/Section.svelte";
	import Cover from "$lib/Cover.svelte";
	import GridBase from "$lib/GridBase.svelte";
	import Blockquote from "$lib/Blockquote.svelte";
	import SlideGallery from "$lib/slidegallery/SlideGallery.svelte";
	import QuoteRotator from '$lib/quoterotator/QuoteRotator.svelte';
	import Img from "$lib/Img.svelte";
	import Button from "$lib/Button.svelte";
	import ContentSlider from "$lib/ContentSlider/ContentSlider.svelte";
	import Header from "$lib/Header.svelte";
	import NavSecondary from "$lib/NavSecondary.svelte";

	// let data = []
	// data = [...contentSliderData, data]
</script>

<!-- <Section id="cover" variante={8} bg_color="bggrey_5">

	<GridBase tipo={1} variante={6}>
    
		<Header tipo={2}
			variante={6}
			textalign = "align-left"
			title="Sergio Forés"
			subtitle={coverData[0].subtitle}/>

		<svelte:fragment slot="subarea1"> 
			<NavSecondary 	{secondaryNav} 
							variante_item={1}
							variante_list={6} />
		</svelte:fragment>
		
		<svelte:fragment slot="subarea2"></svelte:fragment>
		<svelte:fragment slot="subarea3"></svelte:fragment>
		<svelte:fragment slot="subarea4"></svelte:fragment>
		<svelte:fragment slot="subarea5"></svelte:fragment>
		<svelte:fragment slot="subarea6"></svelte:fragment>

	</GridBase>
</Section> -->

<!-- Cover -->
<GridBase tipo={2} variante={7}>
	<svelte:fragment slot="a1">
		<Header tipo={2}
		variante={6}
		textalign = "align-left"
		title="Sergio Forés"
		subtitle={coverData[0].subtitle}/>
	</svelte:fragment>

	<svelte:fragment slot="a2">
		
	</svelte:fragment>
	
	<svelte:fragment slot="a4">
		<QuoteRotator />
	</svelte:fragment>
	
	<svelte:fragment slot="a3">
		<NavSecondary 	{secondaryNav} 
		variante_item={1}
		variante_list={6} />
	</svelte:fragment>

	<svelte:fragment slot="a5"></svelte:fragment>
	<svelte:fragment slot="a6"></svelte:fragment>
</GridBase>

<GridBase tipo={2} variante={7}>
	<svelte:fragment slot="a1">
		<Header
		tipo={1} variante={2} textalign="tal"
		title="Percibir la conexión esencial de todo"
		subtitle=""/>
	</svelte:fragment>

	<svelte:fragment slot="a2">
		<Img variante={1} src="./img/cover4.jpg" alt="Presentation" />
	</svelte:fragment>
	
	<svelte:fragment slot="a3">
		<Section variante={0} bg_color="bggrey_1">
			<Blockquote
			variante={1}
			color="grey_2"
			text="Puedes obtener más información contactándome en las redes o por Whatsapp"/>
		<Button 
			variante={7}
			text="Chat-Whatsapp"
			url="https://api.whatsapp.com/send?phone=+34619549032" />
		</Section>		
	</svelte:fragment>
	
	<svelte:fragment slot="a4">
		<Img 	variante={1}
				src="./img/02234-14.jpg" 
				alt="Presentation"
		/>
	</svelte:fragment>
	
	<svelte:fragment slot="a5">

	</svelte:fragment>
	
	<svelte:fragment slot="a6">
	</svelte:fragment>
</GridBase>