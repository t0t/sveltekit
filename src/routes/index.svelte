<script>
	import { coverData } from "$lib/data/coverData.js";	
	import Section from "$lib/Section.svelte";
	import GridBase from "$lib/GridBase.svelte";
	// import GridBase from "$lib/GridBase.svelte";
	import QuoteRotator from '$lib/quoterotator/QuoteRotator.svelte';
	// import VideoBanner from "$lib/VideoBanner.svelte";
	import Img from "$lib/Img.svelte";
	import Button from "$lib/Button.svelte";
	import Cover from "$lib/Cover.svelte";
	import NavSecondary from "$lib/NavSecondary.svelte";
</script>

<!-- <Section variante={3}>
	<GridBase>
		<div slot="subarea1">header</div>
		<div><p>hole</p></div>
		<div slot="subarea2">footer</div>
	</GridBase>
</Section> -->

<Section id="cover" variante={3}>
	<Cover
		title={coverData[0].title}
		subtitle={coverData[0].subtitle}
		text={coverData[0].text}
		img={coverData[0].img}
	/>
</Section>

<Section id="navsecondary" variante={3}>
	<NavSecondary />
</Section>

<Section id="quoterotator" variante={3}>
	<QuoteRotator />
</Section>

<Section variante={6}>
	<GridBase variante={5}>

		<Img 
			variante={3}
			src="./img/02234-14.jpg" 
			alt="Presentation"
		/>
		
		<div slot="subarea2">
			<h2>Mas info</h2>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.</p>
		</div>

		<div slot="subarea1">
			<!-- <Button
				variante={0}
				text="Chat-Whatsapp"
				url="https://api.whatsapp.com/send?phone=+34619549032"
        	/> -->
		</div>

	</GridBase>
</Section>

<Section variante={3}>
	<GridBase variante={4}>

		<Img 
			variante={4}
			src="./img/cover4.jpg" 
			alt="Presentation"
		/>
		
		<div slot="subarea1">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.</p>
		</div>

		<div slot="subarea2"></div>

	</GridBase>
</Section>