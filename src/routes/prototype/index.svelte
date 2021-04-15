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
			En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.
		</p>
		<p><code class="language-scss">.mw_*</code></p>
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

<div class="dg_12 rg_1 bgwhite p_3 cg_s2_1">
	<div class="col_12 tac c_3">
		<h1>Nomenclatura CSS</h1>
	</div>
	<div class="col_6 col_s2_6">
		<Prism language="markup" code="
&#x3C;!-- let fruits = ['apple','banana'] --&#x3E;
<div class='dg_12 rg_1 p_3'>
	<div class='col_12'>
		<Header/>
	</div>
	&#x3C;!-- Code.svelte --&#x3E;
(each fruits as fruit,i)
	&#x3C;div class=&#x22;col_6&#x22;&#x3E; (fruit) &#x3C;/div&#x3E;
(/each)
<div/>" 
		/>
	</div>
	<div class="col_6 col_s2_6">
		<Prism language="markup" code="
&#x3C;!-- let fruits = ['apple','banana'] --&#x3E;
<div class='dg_12 rg_1 p_3'>
	<div class='col_12'>
		<Header/>
	</div>
	&#x3C;!-- Code.svelte --&#x3E;
(each fruits as fruit,i)
	&#x3C;div class=&#x22;col_6&#x22;&#x3E; (fruit) &#x3C;/div&#x3E;
(/each)
<div/>" 
		/>
	</div>
	<div class="col_6 col_s2_3">
		<code class="language-scss">.mh_*</code>
		<p>min-height: / 1,2,3,4,5,6,7</p>
	</div>
	<div class="col_6 col_s2_3">
		<code class="language-scss">.mw_*</code>
		<p>max-width: / 1,2,3,4,5,6,7</p>
	</div>
	<div class="col_6 col_s2_3">
		<code class="language-scss">.gr_*</code>
		<p>gap-row: / 1,2,3,4,5,6,7</p>
	</div>
	<div class="col_6 col_s2_3">
		<code class="language-scss">.dg</code>
		<p>display-grid: / Default Grid (13 columns)</p>
	</div>
	<div class="col_6 col_s2_3">
		<code class="language-scss">.p_3</code>
		<p>padding: 1rem</p>
	</div>
	<div class="col_6 col_s2_3">
		<code class="language-scss">.col_s2_*</code>
		<p>grid-column: span / 1...13</p>
	</div>
	<div class="col_6 col_s2_3">
		<code class="language-scss">.dg_12</code>
		<p>display-grid: / (12 columns)</p>
	</div>
	<div class="col_6 col_s2_3">
		<code class="language-scss">.col_s2_*</code>
		<p>grid-column: span / 1...13</p>
	</div>

	<div class="col_12 tac c_3">
		<h1>Componentes Html y parámetros</h1>
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<Alert />" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<Button variante='n'/>" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<Section variante='n'/>" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<Header variante='n' title='' subtitle=''/>" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<List tipo='' variante='n'/>" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<ListItem tipo='' />" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<Nav tipo='' />" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<Img tipo='' />" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<Input tipo='' />" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<Nav tipo='' />" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<Img tipo='' />" />
	</div>
	<div class="col_6 col_s2_3">
		<Prism language="markup" code="<Blockquote tipo='' />" />
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
			<ListItem tipo={0} variante={6}>Work in progress...</ListItem>
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
