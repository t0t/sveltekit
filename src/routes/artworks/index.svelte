<script>
	import { coverData } from '$lib/data/coverData.js';
	import Tabs from '$lib/tabheaders/Tabs.svelte';
	import { tabHeaders } from '$lib/data/miProceso.js';
	import LightboxGallery from '$lib/lightboxgallery/LightboxGallery.svelte';
	import Header from '$lib/Header.svelte';
	import Img from '$lib/Img.svelte';
	import Button from '$lib/Button.svelte';
	import Section from '$lib/Section.svelte';
	import Blockquote from '$lib/Blockquote.svelte';
	import VideoBanner from '$lib/VideoBanner.svelte';
	// import Grid from '$lib/Grid.svelte';
	// import List from '$lib/List/List.svelte';
	// import ListItem from '$lib/List/ListItem.svelte';
</script>

<Section id="cover">
	<div class="dg c_1 bgc_4">
		<div class="col_13 mh_3 bgc_primary dg_0 pcc c_4">
			<Header tipo={2} variante={5} title={coverData[1].title} subtitle={coverData[1].subtitle} />
		</div>
		<div class="col_13 col_s2_8">
			<VideoBanner />
		</div>
		<div class="col_13 col_s2_5 mh_2 mh_s2_5 tac dg_0 pcc p_2">
			<Blockquote
				variante={1}
				text="Todo son formas de arte simbólicas con una función mediadora capaz de abrirle lo real a la conciencia."
			/>
		</div>
	</div>
</Section>

<Section id="lightboxgallery" clases="dg pcc tac p_3">
	<Header tipo={1} variante={3} 
			title="Galería" 
			clases="col_13 pb_3"
	/>
	<LightboxGallery clases="col_13" />
</Section>

<Section>
	<div class="dg c_4">
		<div class="col_13 col_s2_5 mh_5 pb_3">
			<Img variante={1} src="./img/bg3.jpg" alt="Presentation" />
		</div>
		<div class="col_13 col_s2_8 p_3 tac c_1">
			<Blockquote
				variante={1}
				text="En la obra de arte, como símbolo que es, se produce un reconocimiento mutuo entre dos caras de una misma realidad que se encuentran. La realidad se reúne a sí misma, se completa a sí misma haciéndose presente como símbolo y  proporcionando la experiencia de descubrimiento de una realidad más original."
			/>
		</div>
	</div>
</Section>
<Section id="proceso">
	<Tabs {tabHeaders} />
</Section>

<Section clases="dg">
	<div class="col_13 dg_0 ">
		<Img clases="mh_5" variante={1} src="./img/bg2.jpg" alt="Presentation" />
	</div>
	<div class="col_13 mh_0 dg_0 pt_3 pb_3 tac bgc_0 pcc_0 c_3 mh_s2_5 rg_1">
		<div class="mw_7">
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
</Section>
