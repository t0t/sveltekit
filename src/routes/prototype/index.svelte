<script>
	import { coverData } from '$lib/data/coverData.js';
	import { codeData } from '$lib/data/codeData.js';
	import { tabHeaders } from '$lib/data/tabsContent.js';
	import { styleGuideNav as navOptions} from '$lib/data/pages.js';
	import NavSecondary from '$lib/NavSecondary.svelte';

	import Header from '$lib/Header.svelte';
	import Blockquote from '$lib/Blockquote.svelte';
	import Img from '$lib/Img.svelte';
	import Section from '$lib/Section.svelte';
	import Button from '$lib/Button.svelte';
	import List from '$lib/List/List.svelte';
	import Code from '$lib/Code/Code.svelte';
	import ListItem from '$lib/List/ListItem.svelte';
	import Tabs from '$lib/tabheaders/Tabs.svelte';
	import FlipCard from '$lib/flashcard/FlipCard.svelte';

	// Styleguide
	import Colores from '$lib/styleguide/Colores.svelte';
	import Grid from '$lib/styleguide/Grid.svelte';
	import BasicHtml from '$lib/styleguide/BasicHtml.svelte';
	import Componentes from '$lib/styleguide/Componentes.svelte';
	import Clases from '$lib/styleguide/Clases.svelte';
	import Buttons from '$lib/styleguide/Buttons.svelte';

	// styleguide component
	let selected = navOptions[0];
	let selectedComp = 0;
	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		selectedComp = event.srcElement.id;
		console.log(selectedComp)
	}
</script>

<!-- Holistic Prototype -->
<Header
	clases="mh_5 tac c_secondary bgc_5"
	tipo={5}
	variante={4}
	img="./img/bg5.png"
	title={coverData[4].title}
	subtitle={coverData[4].subtitle}
/>

<Section clases="dg gc_85 bgc_0 rg_1 bgwhite pr_3 pl_3 pt_1 cg_s2_1 c_4">

	<Code clases="mt_-4 mh_5 dg_0 pcc">
&#x3C;Header
&#x9;clases = 'mh_5 tac c_white' 
	tipo = ''
	variante = ''
&#x9;img = &#x22;./img/bg5.png&#x22;
&#x9;title = ''
&#x9;subtitle = ''
/&#x3E;
	</Code>

	<div class="dg pcc">
		<Header tipo={3}
			variante={6}
			title="Svelte Kit"
			subtitle="Simbiosis perfecta entre CSS, HTML y JS"
		/>
		<p>
			En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al
			instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.
		</p>
		<p><Code>.mw_*</Code></p>
	</div>
</Section>

<Section clases="dg gc_58 bgc_0 c_4 p_3 rg_1 cg_s2_2 pb_0">
	<div>
		<p>
			<strong>Un sistema de diseño basado en Sass con sintaxis minimalista.</strong>
		</p>
		<p>
			Su simplicidad y belleza saltan a la vista.
			<strong>Encapsulamiento holístico:</strong>
			Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata
			de economizar recursos al igual que sucede en la naturaleza.
		</p>
	</div>

	<Code clases="col_13 col_s2_8 dg_0 pcc mh_5">
@for $i from 1 through 13 (
	&#x9;.col_(i)
	&#x9;&#x9;grid-column: span (i);
	&#x9;
	@include media(s2) (
	&#x9;@for i from 1 through 13 (
	&#x9;&#x9;.col_s2_#(i) (
	&#x9;&#x9;&#x9;grid-column: span (i);
	&#x9;&#x9;)
	&#x9;)
)
	</Code>
</Section>

<Section clases="dg gc_85 bgc_0 c_4 p_3 rg_1 cg_s2_2">
	<Code>
<span class="c_2">
//	Con la orden 'git push' nuestro prototipo
	viaja mágicamente por la red hasta su repositorio 
	y también se despliega en producción</span>
> git push
<span class="c_2">
	// Hot reloading, preprocesado, todo lo que
un entorno moderno de desarrollo necesita
</span>
> npm i
> npm run dev
> npm run build
	</Code>

	<List tipo={2} variante={0}>
		<dt>Control de versiones</dt>
		<dd>
			Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro
			prototipo vive en diferentes universos "paralelos"
		</dd>
	</List>
</Section>

<!-- Nomenclatura -->
<Header clases="pb_3 bgc_0 tac c_3" title="Guía de estilos" />

<Section id="Nomenclatura" clases="dg gc_22 c_4 bgc_0 rg_1 bgwhite pl_3 pr_3 pb_3 cg_s2_1">
	<Code clases="mh_5 dg_0 pcc">
<span class="c_2">
	// All sizes are based 
	on these Phi proportions</span>
$h6: 11.089rem;
$h5: 6.854rem;
$h4: 4.236rem;
$h3: 2.618rem;
$h2: 1.618rem;
$h1: 1rem;
$h0: 0.618rem;
$h-1: 0.382rem;
...
	</Code>
	<FlipCard />
</Section>

<!-- Styleguide -->
<div class="dg gc_58 gc_bp0_1">
	<List tipo={3} variante={4} 
	clases="pl_3 pr_3 pb_3 pcs bgc_0 c_4">
		{#each navOptions as option, i}
			<ListItem 	tipo={3} alt={option.name} id={i} 
						variante={4}
						clases={selectedComp==i ? "active" : ""}
						on:click={changeComponent}>
				{option.name}
			</ListItem>
		{/each}
	</List>
	
	{#if selectedComp == 0} 	 <BasicHtml />
	{:else if selectedComp == 1} <Clases />
	{:else if selectedComp == 2} <Colores />
	{:else if selectedComp == 3} <Buttons />
	{:else if selectedComp == 4} <Componentes />
	{:else if selectedComp == 5} <Grid />
	{:else}
	No component loaded
	{/if}

</div>

<!-- Banner -->
<Section clases="dg gc_85 gc_bp0_1 rg_1 bgc_1 mh_10 mh_s2_5">
	<Img clases="p_1" src="./img/grafico-11.svg" alt="" />
	<div class="dg pcc c_4 p_3">
		<Header tipo={3} variante={6} title="Download" subtitle="Actualización y mejora contínua" />

		<List clases="mt_0" tipo={0} variante={0} marker="./img/marker.svg">
			<ListItem tipo={0} variante={6}>Simple, ligero, limpio y claro.</ListItem>
			<ListItem tipo={0} variante={6}>Completo, funcional, versátil y ordenado.</ListItem>
			<ListItem tipo={0} variante={6}>Work in progress...</ListItem>
		</List>
		<ListItem tipo={2} variante={4} href="https://github.com/t0t/sveltekit" alt="" target="_blank">
			<Button variante={3} text="Repositorio en Github" />
		</ListItem>
	</div>
</Section>

<Section id="UIPrototype" clases="dg pt_3 tac bgc_4">
	<Header clases="col_13 pb_3" tipo={1} variante={1} title="Notas acerca de esta web" />

	<Tabs clases="col_13 pl_3 pr_3" {tabHeaders} />
</Section>
