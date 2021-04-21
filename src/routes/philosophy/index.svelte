<script>
	import { coverData } from '$lib/data/coverData.js';
	// import { tabHeaders } from '$lib/data/tabsContent.js';
	import { tabHeaders } from '$lib/data/miProceso.js';
	// import Grid from '$lib/Grid.svelte';
	import Header from '$lib/Header.svelte';
	// import Svg from '$lib/Svg.svelte';
	import Section from '$lib/Section.svelte';
	import Tabs from '$lib/tabheaders/Tabs.svelte';
	import Img from '$lib/Img.svelte';
	import List from '$lib/List/List.svelte';
	import ListItem from '$lib/List/ListItem.svelte';
	import Button from '$lib/Button.svelte';
</script>

<!-- My Philosophy -->
<Section id="philosophy">
	<Header tipo={1} 
	clases="c_2 bgc_0 tac mh_2"
	title={coverData[3].title} subtitle={coverData[3].subtitle} />
</Section>

<div class="dg gc_85 gc_bp0_1 rg_1 pic_bp2 p_3 bgc_primary cg_1 c_5 mh_8">
	<svg class="jse maxh_10 maxh_s2_5" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 193 169">
			<path
				fill="none"
				stroke="#000"
				stroke-width=".7"
				d="M4 165l31-53 30 53H4zm62 0l30-53 31 53H66zm61 0l31-53 30 53h-61zm-92-54l31-53 30
				53H35zm61 0l31-53 31 53H96zM66 58L96 5l31 53H66z"
			/>
			<circle cx="168.3" cy="18.1" r="6" transform="translate(-17 -8) scale(.67024)" />
			<circle cx="214.1" cy="98.5" r="6" transform="translate(-17 -8) scale(.67024)" />
			<circle cx="259.9" cy="178.2" r="6" transform="translate(-17 -8) scale(.67024)" />
			<circle cx="305.7" cy="257.8" r="6" transform="translate(-17 -8) scale(.67024)" />
			<circle cx="214.1" cy="257.8" r="6" transform="translate(-17 -8) scale(.67024)" />
			<circle cx="123.2" cy="257.8" r="6" transform="translate(-17 -8) scale(.67024)" />
			<circle cx="30.8" cy="257.8" r="6" transform="translate(-17 -8) scale(.67024)" />
			<circle cx="76.9" cy="178.2" r="6" transform="translate(-17 -8) scale(.67024)" />
			<circle cx="168.3" cy="178.2" r="6" transform="translate(-17 -8) scale(.67024)" />
			<circle cx="123.2" cy="98.5" r="6" transform="translate(-17 -8) scale(.67024)" />
	</svg>

	<div class="dg garmc rg_1 jss">
		<Header tipo={2} variante={7} title="Tetractys" />
		<p>
			<strong>Hacia el encuentro con todo lo que Es.</strong>
			+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus principios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo.
		</p>
		<List tipo={3} variante={2} clases="">
			<ListItem
				tipo={2}
				variante={0}
				href="https://slides.com/sergiofores/"
				target="_blank"
				rel="external"
			>
				<Button variante={3} text="Slides" />
			</ListItem>
			<ListItem
				tipo={2}
				variante={0}
				href="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing"
				target="_blank"
				rel="external"
			>
				<Button variante={3} text="Libro" />
			</ListItem>
		</List>
	</div>
</div>

<div class="dg gc_58 gc_bp0_1 rg_1 pic_bp2 pt_3 pr_3 pl_3 bgc_0 cg_1 c_5">
	<Img clases="psc jse maxh_10 maxh_s2_5" src="./img/logo.svg" alt="" />

	<div class="dg garmc rg_1 jss">
		<Header tipo={2} variante={7} 
		title="Hay una verdad que puede ser conocida…" />
		<p>
			¿Percibes 2 ese orden 1 atravesándote 0 en la forma 4 del encuentro 3? Es lo inefable
			conociéndose a través de la Creación. 01234 son las llaves de tus ojos. Éstas son las cosas
			que yo he visto, a dónde me llevan las corrientes de todas las formas..
		</p>
		<p>
			A medida que uno va averiguando cosas se va dando cuenta de que las cosas que uno puede llegar
			a saber quieren ser conocidas. Están ocultas y a la vez no lo están. Hay un juego ahí entre lo
			velado y lo revelado, como si lo uno no tuviera sentido sin lo otro.
		</p>
	</div>
</div>

<div class="dg gc_85 gc_bp0_1 rg_1 pic_bp2 pl_3 pr_3 pt_3 bgc_0 cg_1 c_5">
	<div class="dg garmc rg_1 jss">
		<Header tipo={1} variante={1} title="Sentir Orden Forma Conexión" />
		<p>Percibes cualquier cosa como lo que és; un símbolo. Funciona como un Tetris; el objetivo no es amontonar piezas sino disolverlas, ¡que desaparezcan!</p>
		<p>Los 5 arjés. Estructura dinámica sobre la que se asienta toda la Creación. <strong>Y cuanto más perceptible es su inexistencia más presente está.</strong></p>
	</div>
	<img src="./img/01234_bn.svg" alt="" />
</div>

<div class="dg gc_85 gc_bp0_1 rg_1 pic_bp2 p_3 bgc_0 cg_1 c_5">

	<Img src="./img/grafico-8.svg" alt="" />

	<div>
		<p>
			En ocasiones ni siquiera necesitas no estar viendo algo para estar viendo algo. Si vamos a descifrar la Creación vamos a tener que acostumbrarnos a las paradojas.
		</p>
		<p>
			Del griego hermeneutikos; Hermeneuo (Yo descifro) y Tekné (Arte, técnica, tejer). La
			Hermenéutica nace como "el arte o la técnica de explicar, descifrar o interpretar". Así que
			para explicar o descifrar algo, luego veremos el qué, primeramente yo tengo que hacer una
			hermenéutica de ese "algo", averiguar algo que vendrá recogido en alguna otra parte.
		</p>
	</div>
</div>

<div class="dg tac">
	<Header tipo={1} variante={3} clases="pt_3 pb_3"
	title="Los 5 Principios Universales" subtitle="" />

	<Tabs {tabHeaders} />
</div>
