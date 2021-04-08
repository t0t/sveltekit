<script>
    import { coverData } from "$lib/data/coverData.js";	
    import { tabHeaders } from "$lib/data/tabsContent.js";	
	import GridBase from "$lib/GridBase.svelte";
    import Header from "$lib/Header.svelte";
    import Svg from "$lib/Svg.svelte";
    import Section from "$lib/Section.svelte";
    import Tabs from "$lib/tabheaders/Tabs.svelte";
	import List from "$lib/List/List.svelte"    
	import ListItem from "$lib/List/ListItem.svelte" 
	import Button from "$lib/Button.svelte";

</script>

<!-- My Philosophy -->
<Section id="philosophy" variante={3}>
	<Header
		tipo={1}
		variante={3}
		title={coverData[3].title}
		subtitle={coverData[3].subtitle}
		text={coverData[3].text}
		img={coverData[3].img}
	/>
</Section>

<Header
	tipo={1} variante={1}
	title="Sentir Orden Forma Conexión"
	subtitle=""
/>

<Section variante={0}>
	<GridBase variante={1}>

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

		<div slot="subarea1">
			<h2>Tetractys</h2>
			<h3>Hacia el encuentro con todo lo que Es</h3>
			<h4>+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus principios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo.</h4>
			<List tipo={3} variante={2}>
				<ListItem tipo={2} variante={0} href="https://slides.com/sergiofores/" alt="" target="_blank">
					<Button variante={3} text="Slides" />
				</ListItem>
				<ListItem tipo={2} variante={0} href="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing" alt="" target="_blank">
					<Button variante={3} text="Libro" />
				</ListItem>
			</List>
		</div>

		<span slot="subarea2">
			
		</span>
	</GridBase>
</Section>

<Section variante={0}>
	<GridBase variante={0}>

		<img src="./img/logo.svg" alt="">
	
		<div slot="subarea1">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
		</div>

		<div slot="subarea2">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
		</div>
	</GridBase>
</Section>

<Section variante={0}>
	<GridBase variante={2}>

		<img src="./img/01234_bn.svg" alt="">
		
		<div slot="subarea1">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
		</div>

		<div slot="subarea2">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
			
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
		</div>
	</GridBase>
</Section>

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

<Header
	tipo={1} variante={3}
	title="Los 5 Principios Universales"
	subtitle=""
/>

<Section id="principios" variante={7}>
	<Tabs {tabHeaders} />
</Section>