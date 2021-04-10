<script>
	import { coverData } from "$lib/data/coverData.js";	
	import Section from "$lib/Section.svelte";
	import Cover from "$lib/Cover.svelte";
	import GridBase from "$lib/GridBase.svelte";
	import QuoteRotator from '$lib/quoterotator/QuoteRotator.svelte';
	import Img from "$lib/Img.svelte";
	import Button from "$lib/Button.svelte";
	import Header from "$lib/Header.svelte";
	import NavSecondary from "$lib/NavSecondary.svelte";
	import { secondaryNav } from "$lib/data/pages.js";
</script>

<Section id="cover" variante={8} bg_color={5}>
	<GridBase tipo={1} variante={6}>
    
        <span>
			<Header tipo={2}
				variante={6}
				title="Sergio Forés"
				subtitle="Hermenéutica Holística"/>
		</span>
		<span slot="subarea1"> 
			<NavSecondary {secondaryNav} 
			variante_item={1}
			variante_list={6} />
		</span>
		
		<span slot="subarea2"> 
			 
		</span>
		
		<span slot="subarea3"> 
			 
		</span>
		
		<span slot="subarea4"> 
			 
		</span>
		
		<span slot="subarea5"> 
			 
		</span>
		
		<span slot="subarea6"> 
			 
		</span>

	</GridBase>
</Section>

<Section id="quoterotator" variante={3}>
	<QuoteRotator />
</Section>

<Header
	tipo={1} variante={3}
	title="Percibir la conexión esencial de todo"
	subtitle=""
/>

<Section variante={3} bg_color={1}>
	<GridBase variante={5}>

		<Img 
			variante={1}
			src="./img/02234-14.jpg" 
			alt="Presentation"
		/>
		
		<div slot="subarea2">
			<p>Descifrando la Creación, en la intersección del arte, la tecnología y los saberes tradicionales. Un cierto tipo de orden que conforma un cierto tipo de conexión.</p>
		</div>

		<div slot="subarea1">
			<Button
				variante={7}
				text="Chat-Whatsapp"
				url="https://api.whatsapp.com/send?phone=+34619549032"
        	/>
		</div>

	</GridBase>
</Section>

<Section variante={3} bg_color={1}>
	<GridBase variante={4}>

		<Img 
			variante={4}
			src="./img/cover4.jpg" 
			alt="Presentation"
		/>
		
		<div slot="subarea1">
			<p>El fundamento de la Creación radica en un orden arquetípico universal. ...Percibir ese orden conforma un tipo de conexión trascendental.</p>
		</div>

		<div slot="subarea2"></div>

	</GridBase>
</Section>