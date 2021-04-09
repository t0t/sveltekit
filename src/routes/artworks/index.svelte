<script>
	import { coverData } from "$lib/data/coverData.js";	
	import Tabs from "$lib/tabheaders/Tabs.svelte";
	import { tabHeaders } from "$lib/data/miProceso.js"
	import LightboxGallery from "$lib/lightboxgallery/LightboxGallery.svelte"
	import Header from "$lib/Header.svelte";
	import Img from "$lib/Img.svelte";
	import Button from "$lib/Button.svelte";
	import Section from "$lib/Section.svelte";
	import VideoBanner from "$lib/VideoBanner.svelte";
	import GridBase from "$lib/GridBase.svelte";
	import List from "$lib/List/List.svelte"
	import ListItem from "$lib/List/ListItem.svelte"
	import Article from "$lib/Article.svelte"
</script>

<Section id="cover" variante={3}>
	<Header
		tipo={2}
		variante={1}
		title={coverData[1].title}
		subtitle={coverData[1].subtitle}
		text={coverData[1].text}
	/>
</Section>

<Section variante={1} id="video">
	<VideoBanner/>
</Section>

<Header tipo={1} variante={4} title="Galería" />

<Section id="lightboxgallery" variante={0}>
	<LightboxGallery/>
</Section>

<Header tipo={1} variante={4} 
textalign="align-center"
title="El proceso es El Proceso" />

<Section id="proceso" variante={7}>
	<Tabs {tabHeaders} />
</Section>

<Section variante={4}>
	<GridBase variante={2}>

		<img src="./img/grafico-8.svg" alt="">
		
		<div slot="subarea1">
			<p><strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</strong></p>
		</div>

		<div slot="subarea2">
			<p>En la obra de arte, como símbolo que es, se produce un reconocimiento mutuo entre dos caras de una misma realidad que se encuentran. La realidad se reúne a sí misma, se completa a sí misma haciéndose presente como símbolo y  proporcionando la experiencia de descubrimiento de una realidad más original.</p>
			
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
		</div>
	</GridBase>
</Section>

<Section variante={3}>
	<GridBase variante={5}>

		<Img 	variante={4}
				src="./img/cover4.jpg" 
				alt="Presentation"
		/>
		
		<div slot="subarea2">
			<Header tipo={3}
			variante={7} 
			textalign="align-left"
			title="¿Interesado en alguna pieza?"
			/>
			<p>Puedes obtener más información contactándome en las redes o por Whatsapp</p>
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