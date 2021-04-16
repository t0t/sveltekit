<script>
	import { coverData } from '$lib/data/coverData.js';
	import { codeData } from '$lib/data/codeData.js';
	import { tabHeaders } from '$lib/data/tabsContent.js';

	import Header from '$lib/Header.svelte';
	// import Blockquote from '$lib/Blockquote.svelte';
	import Img from '$lib/Img.svelte';
	import Section from '$lib/Section.svelte';
	import Button from '$lib/Button.svelte';
	import List from '$lib/List/List.svelte';
	import Code from '$lib/Code/Code.svelte';
	import ListItem from '$lib/List/ListItem.svelte';
	import Tabs from '$lib/tabheaders/Tabs.svelte';
	// import Prism from '$lib/Code/PrismJS.svelte';
	import FlipCard from '$lib/flashcard/FlipCard.svelte';
</script>

<!-- Holistic Prototype -->
<Header
	clases="mh_5 tac c_white"
	tipo={2}
	variante={0}
	img="./img/bg5.png"
	title={coverData[4].title}
	subtitle={coverData[4].subtitle}
/>

<Section clases="c_4 bgc_0 rg_1 bgwhite p_3 pt_1 cg_s2_1 dg">
	<!-- <Prism clases="col_13 col_s2_8 mt_-4" language={codeData[1].language} code={codeData[1].text} /> -->
	<Code clases="ccol_13 col_s2_8 mt_-4">$h13: 321.916rem; $h12: 198.959rem; 
		$h11: 122.966rem;
		$h10: 75.999rem;
		$h9: 46.971rem;
		$h8: 29.03rem;
		$h7: 17.942rem;
		$h6: 11.089rem;
		$h5: 6.854rem;
		$h4: 4.236rem;
		$h3: 2.618rem;
		$h2: 1.618rem;
		$h1: 1rem;
		$h0: 0.618rem;
		$h-1: 0.382rem;
		$h-2: 0.236rem;
		$h-3: 0.146rem;
		$h-4: 0.09rem;
	</Code>
	<div class="col_13 col_s2_5 dg_0 pcc">
		<Header
			tipo={3}
			variante={6}
			title="Svelte Kit"
			subtitle="Simbiosis perfecta entre CSS, HTML y JS"
		/>
		<p>
			En mi opinión éste es el mejor framework de desarrollo. Cuando lo descubrí me enamoré al
			instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.
		</p>
		<p><code class="language-scss">.mw_*</code></p>
	</div>
</Section>

<Section clases="dg bgc_0 c_4 p_3 rg_1 cg_s2_2 pb_0">
	<div class="col_13 col_s2_5">
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
	<Code clases="col_13 col_s2_8">$h13: 321.916rem; $h12: 198.959rem; 
		$h11: 122.966rem;
		$h10: 75.999rem;
		$h9: 46.971rem;
		$h8: 29.03rem;
		$h7: 17.942rem;
		$h6: 11.089rem;
		$h5: 6.854rem;
		$h4: 4.236rem;
		$h3: 2.618rem;
		$h2: 1.618rem;
		$h1: 1rem;
		$h0: 0.618rem;
		$h-1: 0.382rem;
		$h-2: 0.236rem;
		$h-3: 0.146rem;
		$h-4: 0.09rem;
	</Code>
	<!-- <Prism clases="col_13 col_s2_8" language={codeData[0].language} code={codeData[0].text} /> -->
</Section>

<Section clases="dg bgc_0 c_4 p_3 rg_1 cg_s2_2">
	<Code clases="col_13 col_s2_8">$h13: 321.916rem; $h12: 198.959rem; 
		$h11: 122.966rem;
		$h10: 75.999rem;
		$h9: 46.971rem;
		$h8: 29.03rem;
		$h7: 17.942rem;
		$h6: 11.089rem;
		$h5: 6.854rem;
		$h4: 4.236rem;
		$h3: 2.618rem;
		$h2: 1.618rem;
		$h1: 1rem;
		$h0: 0.618rem;
		$h-1: 0.382rem;
		$h-2: 0.236rem;
		$h-3: 0.146rem;
		$h-4: 0.09rem;
	</Code>
	<!-- <Prism clases="col_13 col_s2_8" language={codeData[2].language} code={codeData[2].text} /> -->
	<List clases="col_13 col_s2_5" tipo={2} variante={0}>
		<dt>Control de versiones</dt>
		<dd>
			Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro
			prototipo vive en diferentes universos "paralelos"
		</dd>
	</List>
</Section>

<!-- Nomenclatura -->
<Section id="Nomenclatura" clases="c_4 bgc_0 dg_12 rg_1 bgwhite pl_3 pr_3 pb_3 cg_s2_1">
	<Header clases="col_12 tac c_3" title="Guía de estilos" />
	<!-- <Prism -->
		<!-- clases="col_12 col_s2_6"
		language="markup"
		code="&#x26;#x3C;!-- let fruits = [&#x27;apple&#x27;,&#x27;banana&#x27;] --&#x26;#x3E;
	&#x26;#x3Cdiv class=&#x27;dg_12 rg_1 p_3&#x27;/&#x26;#x3E;
	&#x9;&#x26;#x3Cdiv class=&#x27;col_12&#x27;/&#x26;#x3E;
	&#x9;&#x9;&#x26;#x3CHeader/&#x26;#x3E;
	&#x9;&#x26;#x3C/&#x26;#x3E;div&#x3E;
	&#x9;&#x26;#x3C;!-- Code.svelte --&#x26;#x3E;
	(each fruits as fruit,i)
	&#x9;&#x26;#x3C;div class=&#x26;#x22;col_6&#x26;#x22;&#x26;#x3E; (fruit) &#x26;#x3C;/div&#x26;#x3E;
	(/each) &#x26;#x3Cdiv/&#x26;#x3E;"/> -->
	<Code clases="col_12 col_s2_6">$h13: 321.916rem; $h12: 198.959rem; 
		$h11: 122.966rem;
		$h10: 75.999rem;
		$h9: 46.971rem;
		$h8: 29.03rem;
		$h7: 17.942rem;
		$h6: 11.089rem;
		$h5: 6.854rem;
		$h4: 4.236rem;
		$h3: 2.618rem;
		$h2: 1.618rem;
		$h1: 1rem;
		$h0: 0.618rem;
		$h-1: 0.382rem;
		$h-2: 0.236rem;
		$h-3: 0.146rem;
		$h-4: 0.09rem;
	</Code>
	<FlipCard clases="col_12 col_s2_6" />

	<!-- Clases -->
	<Header tipo={4} clases="col_12 tac c_4" title="Clases" />

	<List tipo={1} clases="col_12 gap_1 dg_12 c_1">
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>min-height: (*)vh; </small>
			<Code clases="language-scss">.mh_(*)</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>min-width: (*)vw; </small>
			<Code clases="language-scss">.mw_*</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>row-gap: span (*);</small>
			<Code clases="language-scss">.gr_*</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small> gap: $h3; </small>
			<Code clases="language-scss">.gap_3</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>display: grid; </small>
			<Code clases="language-scss">.dg_0</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>css </small>
			<Code clases="language-scss">.dg_12</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>css </small>
			<Code clases="language-scss">.dg_12</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>padding: 1.62rem; </small>
			<Code clases="language-scss">.p_3</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>css </small>
			<Code clases="language-scss">.col_s2_*</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>css </small>
			<Code clases="language-scss">.col_s2_*</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>padding-top: *rem; </small>
			<Code clases="language-scss">.pt_*</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>padding-bottom: 1.62*; </small>
			<Code clases="language-scss">.pb_*</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>text-align: center; </small>
			<Code clases="language-scss">.tac</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>text-align: left; </small>
			<Code clases="language-scss">.tal</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>text-align: right; </small>
			<Code clases="language-scss">.tar</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>place-content: center; </small>
			<Code clases="language-scss">.ppc</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>color: *; </small>
			<Code clases="language-scss">.c_*</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>background-color: *; </small>
			<Code clases="language-scss">.bgc_*</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>overflow: hidden; </small>
			<Code clases="language-scss">.oh</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>text-align: right; </small>
			<Code clases="language-scss">.tar</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>text-align: right; </small>
			<Code clases="language-scss">.tar</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>text-align: right; </small>
			<Code clases="language-scss">.tar</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>text-align: right; </small>
			<Code clases="language-scss">.tar</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>text-align: right; </small>
			<Code clases="language-scss">.tar</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1">
			<small>text-align: right; </small>
			<Code clases="language-scss">.tar</Code>
		</ListItem>
	</List>

	<!-- Colores -->
	<Header tipo={4} clases="col_12 tac c_4" title="Colores" />

	<List tipo={1} clases="col_12 dg_12 c_1">
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_white pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$white</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_0 pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$grey_0</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_1 pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$grey_1</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_2 pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$grey_2</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_3 pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$grey_3</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_4 pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$grey_4</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_5 pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$grey_5</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_black pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$black</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_primary pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$primary</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_secondary pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$seconday</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_tertiary pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$tertiary</Code>
		</ListItem>
		<ListItem tipo={4} clases="col_6 col_s2_3 dg_0 rg_-1 bgc_quaternary pt_3 pr_1 pl_1 pb_1">
			<Code clases="language-scss">$quaternary</Code>
		</ListItem>
	</List>
</Section>

<!-- Componentes -->
<Section id="Componentes" clases="c_4 bgc_0 dg_12 rg_1 bgwhite pl_3 pr_3 pb_3 cg_s2_1">
	<Header tipo={4} clases="col_12 tac c_4" title="Componentes" />
	<Code clases="col_6 col_s2_3 oh">&#x3C;Alert /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Blockquote /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Section /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;List /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;List tipo='ul'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;List tipo='div'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;List tipo='dl'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;List tipo='ol'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;List tipo='a'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;ListItem /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;ListItem tipo='button'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;ListItem tipo='div'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;ListItem tipo='a'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;ListItem tipo='li'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Button /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Nav /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Nav tipo='secondary' /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Nav tipo='fixed' /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Form /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Alert /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Input /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Header /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Header tipo='bgimg'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Footer /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Tabs /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;ContentSlider /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;FlashCard /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;LightboxGallery /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;SlideGallery /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;QuoteRotator /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Img /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Img tipo='figure'/&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Svg /&#x3E;</Code>
	<Code clases="col_6 col_s2_3 oh">&#x3C;Svg tipo='inline' /&#x3E;</Code>
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;Alert /&#x3E;" /> -->
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;Button variante='n'/&#x3E" /> -->
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;Section variante='n'/&#x3E" /> -->
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;Header clases='dg p_1'/&#x3E" /> -->
	<!-- <Prism -->
		<!-- clases="col_6 col_s2_3 oh"
		language="markup"
		code="&#x3C;List tipo='' variante='n'/&#x3E"
	/> -->
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;ListItem tipo='' /&#x3E" /> -->
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;Nav tipo='' /&#x3E" /> -->
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;Img tipo='' /&#x3E" /> -->
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;Input tipo='' /&#x3E" /> -->
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;Nav tipo='' /&#x3E" /> -->
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;Code clases='' /&#x3E" /> -->
	<!-- <Prism clases="col_6 col_s2_3 oh" language="markup" code="&#x3C;Blockquote tipo='' /&#x3E" /> -->
</Section>

<!-- Grid -->
<Section id="Grid" clases="c_4 bgc_0 pl_3 pr_3 pb_3">
	<Header tipo={4} clases="tac c_4 pb_2" title="Grid 13" />

	<div class="dg rg_-1 c_0">
		<div class="col_8 bgc_2 dg_0 pcc p_1">.col_8</div>
		<div class="col_5 bgc_5 dg_0 pcc p_1">.col_5</div>
		<div class="col_5 bgc_5 dg_0 pcc p_1">.col_5</div>
		<div class="col_8 bgc_2 dg_0 pcc p_1">.col_8</div>
		<div class="col_1 bgc_3 dg_0 pcc p_1">.col_1</div>
		<div class="col_1 bgc_1 c_4 dg_0 p_1 pcc">.col_1</div>
		<div class="col_3 bgc_3 dg_0 pcc p_1">.col_3</div>
		<div class="col_5 bgc_5 dg_0 pcc p_1">.col_5</div>
		<div class="col_3 bgc_3 dg_0 pcc p_1">.col_3</div>
		<div class="col_13 bgc_4 dg_0 pcc p_1">.col_13</div>
	</div>

	<Header tipo={4} clases="tac c_4 pb_2 pt_2" title="Grid 12" />

	<div class="dg_12 rg_-1 c_0">
		<div class="col_1 bgc_2 dg_0 pcc p_1"><small class="">.col_1</small></div>
		<div class="col_11 bgc_3 dg_0 pcc p_1"><small class="">.col_11</small></div>
		<div class="col_2 bgc_5 dg_0 pcc p_1"><small class="">.col_2</small></div>
		<div class="col_10 bgc_3 dg_0 pcc p_1"><small class="">.col_10</small></div>
		<div class="col_3 bgc_5 dg_0 pcc p_1"><small class="">.col_3</small></div>
		<div class="col_9 bgc_3 dg_0 pcc p_1"><small class="">.col_9</small></div>
		<div class="col_4 bgc_2 dg_0 pcc p_1"><small class="">.col_4</small></div>
		<div class="col_4 bgc_2 dg_0 pcc p_1"><small class="">.col_4</small></div>
		<div class="col_4 bgc_1 c_4 dg_0 p_1 pcc"><small class="">.col_4</small></div>
		<div class="col_4 bgc_2 dg_0 pcc p_1"><small class="">.col_4</small></div>
		<div class="col_8 bgc_5 dg_0 pcc p_1"><small class="">.col_8</small></div>
		<div class="col_5 bgc_white dg_0 pcc p_1"><small class="c_3">.col_5</small></div>
		<div class="col_7 bgc_3 dg_0 pcc p_1"><small class="">.col_7</small></div>
		<div class="col_6 bgc_1 c_4 dg_0 pcc p_1"><small class="">.col_6</small></div>
		<div class="col_6 bgc_2 dg_0 pcc p_1"><small class="">.col_6</small></div>
		<div class="col_12 bgc_4 dg_0 pcc p_1"><small class="">.col_12</small></div>
	</div>
</Section>

<!-- Banner -->
<Section clases="dg rg_1 bgc_1 mh_10 mh_s2_5">
	<Img clases="col_13 col_s2_8 p_1" src="./img/grafico-11.svg" alt="" />
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
</Section>

<Section id="UIPrototype" clases="dg pt_3 tac bgc_4">
	<Header clases="col_13 pb_3" tipo={1} variante={1} title="Notas acerca de esta web" />

	<Tabs clases="col_13 pl_3 pr_3" {tabHeaders} />
</Section>
