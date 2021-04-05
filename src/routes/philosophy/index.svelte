<script>
    import { coverData } from "$lib/data/coverData.js";	
	import GridBase from "$lib/GridBase.svelte";
    import Cover from "$lib/Cover.svelte";
    import Section from "$lib/Section.svelte";
    import TabHeaders from "$lib/tabheaders/TabHeaders.svelte";
</script>

<!-- My Philosophy -->
<Section id="philosophy" variante={3}>
	<Cover
		variante={2}
		title={coverData[3].title}
		subtitle={coverData[3].subtitle}
		text={coverData[3].text}
	/>
</Section>

<Section variante={0}>
	<GridBase variante={1}>
		<hgroup slot="subarea1">
			<h2>+0+1234</h2>
			<h3>Hacia el encuentro con todo lo que Es</h3>
			<h4>+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus principios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo.</h4>
		</hgroup>

		<svg fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 193 169">
			<path fill="none" stroke="#000" stroke-width=".7" d="M4 165l31-53 30 53H4zm62 0l30-53 31 53H66zm61 0l31-53 30 53h-61zm-92-54l31-53 30 53H35zm61 0l31-53 31 53H96zM66 58L96 5l31 53H66z"/>
			<circle cx="168.3" cy="18.1" r="6" transform="translate(-17 -8) scale(.67024)"/>
			<circle cx="214.1" cy="98.5" r="6" transform="translate(-17 -8) scale(.67024)"/>
			<circle cx="259.9" cy="178.2" r="6" transform="translate(-17 -8) scale(.67024)"/>
			<circle cx="305.7" cy="257.8" r="6" transform="translate(-17 -8) scale(.67024)"/>
			<circle cx="214.1" cy="257.8" r="6" transform="translate(-17 -8) scale(.67024)"/>
			<circle cx="123.2" cy="257.8" r="6" transform="translate(-17 -8) scale(.67024)"/>
			<circle cx="30.8" cy="257.8" r="6" transform="translate(-17 -8) scale(.67024)"/>
			<circle cx="76.9" cy="178.2" r="6" transform="translate(-17 -8) scale(.67024)"/>
			<circle cx="168.3" cy="178.2" r="6" transform="translate(-17 -8) scale(.67024)"/>
			<circle cx="123.2" cy="98.5" r="6" transform="translate(-17 -8) scale(.67024)"/>
		</svg>

		<nav slot="subarea2">
			<a href="https://slides.com/sergiofores/" target="_blank">Slides</a> 
			<a href="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" target="_blank">Libro</a>
		</nav>
	</GridBase>
</Section>

<Section id="tabheaders" variante={3}>
	<TabHeaders />
</Section>
