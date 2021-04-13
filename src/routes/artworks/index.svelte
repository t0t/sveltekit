<script>
	import { coverData } from "$lib/data/coverData.js";	
	import Tabs from "$lib/tabheaders/Tabs.svelte";
	import { tabHeaders } from "$lib/data/miProceso.js"
	import LightboxGallery from "$lib/lightboxgallery/LightboxGallery.svelte"
	import Header from "$lib/Header.svelte";
	import Img from "$lib/Img.svelte";
	import Button from "$lib/Button.svelte";
	import Section from "$lib/Section.svelte";
	import Blockquote from "$lib/Blockquote.svelte";
	import VideoBanner from "$lib/VideoBanner.svelte";
	import GridBase from "$lib/GridBase.svelte";
	import List from "$lib/List/List.svelte"
	import ListItem from "$lib/List/ListItem.svelte"
</script>

<Section id="cover" variante={3}>

	<GridBase tipo={2} variante={8}>
		<svelte:fragment slot="_3x3">
			<div class="bghighlight fullfill"></div>
		</svelte:fragment>

		<svelte:fragment slot="_5x5">
			<Header
				tipo={2}
				variante={6}
				title={coverData[1].title}
				subtitle={coverData[1].subtitle}
				text={coverData[1].text}
			/>
			<Blockquote align="tac"
						color="grey_3"
						variante={1}
						text="Todo son formas de arte simbólicas con una función mediadora capaz de abrirle lo real a la conciencia." />
		</svelte:fragment>
		
		<svelte:fragment slot="_2x2">
			<div class="bggrey_4 fullfill"></div>
		</svelte:fragment>
		
		<svelte:fragment slot="_8x8">
			<VideoBanner/>
		</svelte:fragment>
		
		<svelte:fragment slot="_1x1">
			<div class="bggrey_3 fullfill"></div>
		</svelte:fragment>
	</GridBase>

</Section>

<Header tipo={1} variante={4} title="Galería" />

<Section id="lightboxgallery" variante={0} bg_color="bggrey_1">
	<LightboxGallery/>
</Section>

<!-- <Section id="proceso" variante={7} bg_color="bggrey_0">
	<Tabs {tabHeaders} />
</Section> -->

<Section id="cover" variante={3}>

	<GridBase tipo={2} variante={8}>
		<svelte:fragment slot="_3x3">
			
		</svelte:fragment>
		
		<svelte:fragment slot="_5x5">
			<Blockquote align="tar"
			color="grey_3" variante={1}
			text="En la obra de arte, como símbolo que es, se produce un reconocimiento mutuo entre dos caras de una misma realidad que se encuentran. La realidad se reúne a sí misma, se completa a sí misma haciéndose presente como símbolo y  proporcionando la experiencia de descubrimiento de una realidad más original." />
		</svelte:fragment>
		
		<svelte:fragment slot="_2x2">
			<!-- <Blockquote align="tar"
			color="grey_3" variante={1}
			text="Me interesa recrear las condiciones necesarias para que las leyes de la física y el tiempo puedan quedar atrapadas en una forma." /> -->
		</svelte:fragment>
		
		<svelte:fragment slot="_8x8">
			<img src="./img/bg3.jpg" alt="">
		</svelte:fragment>
		
		<svelte:fragment slot="_1x1">
			<div class="bggrey_3 fullfill"></div>
		</svelte:fragment>
	</GridBase>

	<GridBase tipo={2} variante={8}>
		<svelte:fragment slot="_3x3">
			<div class="bghighlight fullfill"></div>
		</svelte:fragment>
		
		<svelte:fragment slot="_5x5">
			<Blockquote align="tac"
			color="grey_3" variante={1}
			text="Puedes obtener más información contactándome en las redes o por Whatsapp" />
			
			<Button
				variante={7}
				text="Chat-Whatsapp"
				url="https://api.whatsapp.com/send?phone=+34619549032"
        	/>
		</svelte:fragment>
		
		<svelte:fragment slot="_2x2">
			<div class="bggrey_4 fullfill"></div>

		</svelte:fragment>
		
		<svelte:fragment slot="_8x8">
			<img src="./img/bg2.jpg" alt="">
		</svelte:fragment>
		
		<svelte:fragment slot="_1x1">
		</svelte:fragment>
	</GridBase>
</Section>