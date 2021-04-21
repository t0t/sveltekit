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
</script>


<Header tipo={2} clases="tac mh_2" title={coverData[1].title} subtitle={coverData[1].subtitle} />

<VideoBanner clases="dg gc_58 bgc_5" />

<Blockquote variante={1}
	clases="pt_3 pl_3 pr_3"
	text="Todo son formas de arte simbólicas con una función mediadora capaz de abrirle lo real a la conciencia."
/>

<Section id="lightboxgallery" clases="dg pcc tac p_3">
	<Header tipo={1} variante={3} 
			title="Galería" 
			clases="pb_2"
	/>
	<LightboxGallery />
</Section>

<div class="dg c_4 bgc_5">
	<Img variante={1} 
	clases="pr_3 pb_3"
	src="./img/bg3.jpg" alt="Presentation" />

	<Blockquote variante={1}
	clases="mw_10 mw_s2_5 pl_3 pb_3 pr_3 c_secondary"
		text="En la obra de arte, como símbolo que es, se produce un reconocimiento mutuo entre dos caras de una misma realidad que se encuentran. La realidad se reúne a sí misma, se completa a sí misma haciéndose presente como símbolo y  proporcionando la experiencia de descubrimiento de una realidad más original."
	/>
</div>

<Section id="proceso">
	<Tabs {tabHeaders} />
</Section>

<Img clases="mh_5" variante={1} src="./img/bg2.jpg" alt="Presentation" />

<div class="dg mh_0 pt_3 pb_3 tac bgc_0 pcc_0 c_3 mh_s2_5 rg_1">
	<Blockquote variante={1}
		clases="mw_7"
		text="Puedes obtener más información contactándome en las redes o por Whatsapp"
	/>

	<Button variante={7}
		text="Chat-Whatsapp"
		url="https://api.whatsapp.com/send?phone=+34619549032"
	/>
</div>
