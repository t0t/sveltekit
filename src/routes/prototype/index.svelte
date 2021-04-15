<script>
	import { coverData } from '$lib/data/coverData.js';
	import { codeData } from '$lib/data/codeData.js';
	import { tabHeaders } from '$lib/data/tabsContent.js';

	import Header from '$lib/Header.svelte';
	import Blockquote from '$lib/Blockquote.svelte';
	import Img from '$lib/Img.svelte';
	import Section from '$lib/Section.svelte';
	import Button from '$lib/Button.svelte';
	import Grid from '$lib/Grid.svelte';
	import List from '$lib/List/List.svelte';
	import ListItem from '$lib/List/ListItem.svelte';
	import Tabs from '$lib/tabheaders/Tabs.svelte';
	import Prism from '$lib/Code/PrismJS.svelte';
</script>

<!-- Holistic Prototype -->
<Section id="cover" variante={1}>
	<div class="dg mh_5">
		<div class="col_13 mh_3 tac bgc_3 c_white">
			<Header
				tipo={2}
				variante={0}
				img="./img/grafico-1.svg"
				title={coverData[4].title}
				subtitle={coverData[4].subtitle} />
		</div>
	</div>
</Section>

<div class="dg bgc_0 c_4 pl_3 pr_3 rg_1 cg_s2_2 pb_0">

	<div class="col_13 col_s2_8 mt_-4">
		<Prism language={codeData[1].language} code={codeData[1].text} />
	</div>
	<div class="col_13 col_s2_5 dg_0 pcc">
		<Header
			tipo={3}
			variante={6}
			textalign="align-left"
			title="Svelte Kit"
			subtitle="Simbiosis perfecta entre CSS, HTML y JS" />
		<p>
			En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al
			instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.
		</p>
	</div>
</div>

<div class="dg bgc_0 c_4 p_3 rg_1 cg_s2_2 pb_0">
	<div class="col_13 col_s2_5">
		<p>
			<strong>Un sistema de diseño basado en Sass con sintaxis minimalista.</strong>
		</p>
		<p>
			Su simplicidad y belleza saltan a la vista.
			<strong>Encapsulamiento holístico:</strong>
			Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se
			trata de economizar recursos al igual que sucede en la naturaleza.
		</p>
	</div>
	<div class="col_13 col_s2_8">
		<Prism language={codeData[0].language} code={codeData[0].text} />
	</div>
</div>

<div class="dg bgc_0 c_4 p_3 rg_1 cg_s2_2">
	<div class="col_13 col_s2_8">
		<Prism language={codeData[2].language} code={codeData[2].text} />
	</div>
	<div class="col_13 col_s2_5">
		<List tipo={2} variante={0}>
			<dt>Control de versiones</dt>
			<dd>
				Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro
				prototipo vive en diferentes universos "paralelos"
			</dd>
		</List>
	</div>
</div>

<div class="dg rg_1 bgc_1 mh_10 mh_s2_5">
	<div class="col_13 col_s2_8">
		<Img src="./img/grafico-11.svg" alt="" />
	</div>
	<div class="col_13 col_s2_5 dg_0 pcc c_4 p_3">
		<Header tipo={3} variante={6} title="Download" subtitle="Actualización y mejora contínua" />
		<List tipo={0} variante={0} marker="./img/marker.svg">
			<ListItem tipo={0} variante={6}>Simple, ligero, limpio y claro.</ListItem>
			<ListItem tipo={0} variante={6}>Completo, funcional, versátil y ordenado.</ListItem>
			<ListItem tipo={0} variante={6}>etc</ListItem>
		</List>
		<ListItem tipo={2} variante={4} href="https://github.com/t0t/sveltekit" alt="" target="_blank">
			<Button variante={3} text="Repositorio en Github" />
		</ListItem>
	</div>
</div>

<div class="dg pt_3 pb_3 tac bgc_4">
	<div class="col_13">
		<Header tipo={1} variante={1} title="Notas acerca de esta web" />
	</div>
</div>

<Section id="UIPrototype" variante={7}>
	<Tabs {tabHeaders} />
</Section>
