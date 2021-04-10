<script>
    import { coverData } from "$lib/data/coverData.js";	
    import { codeData } from "$lib/data/codeData.js";	
    import Header from "$lib/Header.svelte";
    // import Code from "$lib/Code/Code.svelte";
    import Section from "$lib/Section.svelte";
    import Button from "$lib/Button.svelte";
    import GridBase from "$lib/GridBase.svelte";
	import List from "$lib/List/List.svelte"    
	import ListItem from "$lib/List/ListItem.svelte"
	import { tabHeaders } from "$lib/data/tabsContent.js";
	import Tabs from "$lib/tabheaders/Tabs.svelte";
	import Prism from "$lib/Code/PrismJS.svelte"; 
</script>

<!-- Holistic Prototype -->
<Section id="cover" variante={3}>
	<Header
		tipo={2}
		variante={1}
		title={coverData[4].title}
		subtitle={coverData[4].subtitle}
		text={coverData[4].text}
	/>
</Section>

<Section variante={0} bg_color="bggrey_0">
	<GridBase variante={2}>

		<Prism language="{codeData[1].language}" code="{codeData[1].text}" />
		
		<div slot="subarea1">
			<Header
				tipo={3}
				variante={6}
				textalign="align-left"
				title="Svelte Kit"
				subtitle="El mejor hábitat para CSS, HTML y JS"
			/>
		</div>

		<div slot="subarea2">
			<p>Svelte es el mejor framework de desarrollo que he probado. Cuando lo descubrí me enamoré al instante y supe que ese sería mi motor de templates y mi generador de sitios web estáticos.</p>
			<p>Su simplicidad y belleza saltan a la vista. <strong>Encapsulamiento holístico:</strong> Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.</p>
		</div>
	</GridBase>
</Section>

<Section variante={0}>
	<GridBase variante={0}>
		<Prism language="{codeData[0].language}" code="{codeData[0].text}" />

		<div slot="subarea1">
			<Header
				tipo={3}
				variante={6}
				textalign="align-left"
				title="SCSS"
				subtitle="Diseño y prototipado al más bajo nivel"
			/>
		</div>
		
		<div slot="subarea2">
			<p>¿Porqué perder tiempo prediseñando en Sketch cuando podemos emplearlo en un entorno REAL?</p>
			<p>Una serie de mixins y funciones desde el preprocesador Sass facilitan la generación de un CSS limpio y ordenado. El ritmo vertical y todas las proporciones de nuestra UI se basan en el número áureo.</p>
		
		</div>
	</GridBase>
</Section>

<Section variante={0} bg_color="bggrey_0">
	<GridBase variante={1}>

		<Prism language="{codeData[2].language}" code="{codeData[2].text}" />
	
		<div slot="subarea1">
			<List tipo={2} variante={0}>
				<dt>Control de versiones</dt>
				<dd>Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos "paralelos"</dd>
			</List>
		</div>

		<div slot="subarea2">
			
		</div>
	</GridBase>
</Section>



<Section variante={4} bg_color="bgwhite">
	<GridBase variante={2}>

		<img src="./img/grafico-11.svg" alt="">
		
		<div slot="subarea1">
			<Header
				tipo={3}
				variante={6}
				textalign="align-left"
				title="Download"
				subtitle="Actualización y mejora contínua"
			/>
			<List 
				tipo={0} 
				variante={0}
				marker="./img/marker.svg">
				<ListItem tipo={0} variante={6}>
					Simple, ligero, limpio y claro.
				</ListItem>
				<ListItem tipo={0} variante={6}>
					Completo, funcional, versátil y ordenado.
				</ListItem>
				<ListItem tipo={0} variante={6}>
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

<Header
	tipo={1} variante={3}
	title="Ceros y Unos."
/>

<Section id="UIPrototype" variante={7} bg_color="bggrey_0">
	<Tabs {tabHeaders} />
</Section>