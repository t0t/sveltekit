<script>
	import { coverData } from "$lib/data/coverData.js";	
	// import FlipCard from "$lib/flashcard/FlipCard.svelte"
	// import SlideGallery from "$lib/slidegallery/SlideGallery.svelte"
	import LightboxGallery from "$lib/lightboxgallery/LightboxGallery.svelte"
	import Header from "$lib/Header.svelte";
	import Img from "$lib/Img.svelte";
	import Button from "$lib/Button.svelte";
	// import ContactBanner from "$lib/contactbanner/ContactBanner.svelte";
	import Section from "$lib/Section.svelte";
	import VideoBanner from "$lib/VideoBanner.svelte";
	import GridBase from "$lib/GridBase.svelte";
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

<!-- <Section id="slidegallery" variante={0}>
	<SlideGallery/>
</Section> -->

<Section variante={1} id="video">
	<VideoBanner/>
</Section>

<Header tipo={1} variante={4}
	title="Galería" />

<Section id="lightboxgallery" variante={0}>
	<LightboxGallery/>
</Section>

<Header tipo={1} variante={3}
	title="Mi proceso creativo" />

<Section variante={4}>
	<GridBase variante={2}>

		<img src="./img/grafico-8.svg" alt="">
		
		<div slot="subarea1">
			<p><strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</strong></p>
		</div>

		<div slot="subarea2">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
			
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
		</div>
	</GridBase>
</Section>

<Section variante={3}>
	<GridBase variante={5}>

		<Img 
			variante={4}
			src="./img/cover4.jpg" 
			alt="Presentation"
		/>
		
		<div slot="subarea2">
			<h2>Mas info</h2>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.</p>
		</div>

		<div slot="subarea1">
			<Button
				variante={1}
				text="Chat-Whatsapp"
				url="https://api.whatsapp.com/send?phone=+34619549032"
        	/>
		</div>

	</GridBase>
</Section>

<!-- <Section id="flipcard" variante={2}>
	<FlipCard/>
</Section> -->