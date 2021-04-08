<script>
    import { coverData } from "$lib/data/coverData.js";	
    import Cover from "$lib/Cover.svelte";
    import Section from "$lib/Section.svelte";
    import TabHeaders from "$lib/tabheaders/TabHeaders.svelte";
    import Button from "$lib/Button.svelte";
    import GridBase from "$lib/GridBase.svelte";
	import List from "$lib/List/List.svelte"    
	import ListItem from "$lib/List/ListItem.svelte"    
</script>

<!-- Holistic Prototype -->
<Section id="cover" variante={3}>
	<Cover
		variante={1}
		title={coverData[4].title}
		subtitle={coverData[4].subtitle}
		text={coverData[4].text}
	/>
</Section>

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
			<h2>El prototipo de mis sueños</h2>
			<List 
				tipo={0} 
				variante={0}
				marker="./img/marker.svg">
				<ListItem tipo={0} variante={3}>
					Simple, ligero, limpio y claro.
				</ListItem>
				<ListItem tipo={0} variante={3}>
					Completo, funcional, versátil y ordenado.
				</ListItem>
				<ListItem tipo={0} variante={3}>
					etc
				</ListItem>
			</List>
		</div>
		
		<div slot="subarea2">

			<List tipo={3} variante={0}>
				<ListItem tipo={2} variante={4} href="https://github.com/t0t/sveltekit" alt="" target="_blank">
					<Button variante={3} text="Repositorio en Github" />
				</ListItem>
			</List>
		
		</div>
	</GridBase>
</Section>

<Section variante={0}>
	<GridBase variante={0}>

		<img src="./img/logo.svg" alt="">
	
		<div slot="subarea1">
			<h2>+0+124</h2>
			<List tipo={2} variante={0}>
				<dt>Control de versiones</dt>
				<dd>Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos.</dd>
				<dd>sdfsd</dd>
				<dt>Encapsulamiento holístico</dt>
				<dd>Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.</dd>
			</List>
		</div>

		<div slot="subarea2">
			
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

<Section id="tabheaders" variante={5}>
	<TabHeaders />
</Section>