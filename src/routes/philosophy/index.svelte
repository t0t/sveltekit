<script>
	import { coverData } from '$lib/data/coverData.js';
	import { tabHeaders } from '$lib/data/tabsContent.js';
	import Grid from '$lib/Grid.svelte';
	import Header from '$lib/Header.svelte';
	import Svg from '$lib/Svg.svelte';
	import Section from '$lib/Section.svelte';
	import Tabs from '$lib/tabheaders/Tabs.svelte';
	import Img from '$lib/Img.svelte';
	import List from '$lib/List/List.svelte';
	import ListItem from '$lib/List/ListItem.svelte';
	import Button from '$lib/Button.svelte';
</script>

<!-- My Philosophy -->
<Section id="philosophy" variante={1}>
	<div class="dg">
		<div class="col_13 c_5 bgc_0 tac p_1">
			<Header tipo={1} variante={3} title={coverData[3].title} subtitle={coverData[3].subtitle} />
		</div>
	</div>
</Section>

<div class="dg rg_1 cg_s2_1 p_3 bgc_primary c_4">
	<div class="col_13 col_s2_5">
		<svg fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 193 169">
			<path
				fill="none"
				stroke="#000"
				stroke-width=".7"
				d="M4 165l31-53 30 53H4zm62 0l30-53 31 53H66zm61 0l31-53 30 53h-61zm-92-54l31-53 30
				53H35zm61 0l31-53 31 53H96zM66 58L96 5l31 53H66z" />
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
	</div>
	<div class="col_13 col_s2_8">
		<div class="dg">
			<div class="col_13">
				<Header tipo={2} variante={7} title="Tetractys" />
			</div>
			<div class="col_13">
				<h3>Hacia el encuentro con todo lo que Es</h3>
				<h4>+0+1234 consiste en una hermenéutica de la Creación que observa experiencialmente sus
				principios universales. Ancestralmente 5 símbolos numéricos representan las partes de Todo</h4>	
			</div>
			<List tipo={3} variante={2}>
				<ListItem tipo={2} variante={0} href="https://slides.com/sergiofores/" alt="" target="_blank">
					<Button variante={3} text="Slides" />
				</ListItem>
				<ListItem
					tipo={2}
					variante={0}
					href="https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing"
					alt=""
					target="_blank">
					<Button variante={3} text="Libro" />
				</ListItem>
			</List>
		</div>
	</div>
</div>

<div class="dg p_3 bgc_0 c_4 rg_1 cg_s2_1">

	<div class="col_13 col_s2_8">
		<Img src="./img/logo.svg" alt="" />
	</div>

	<div class="col_13 col_s2_5 dg_0 gap_1">
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

	<div class="col_13 col_s2_5 dg_0 rg_1">
		<Header tipo={1} variante={1} 
		title="Sentir Orden Forma Conexión" />
		<p>
			Percibes cualquier cosa como lo que és; un símbolo. Funciona como un Tetris; el objetivo no es amontonar piezas sino disolverlas, ¡que desaparezcan!
		</p>
		<p>
			Los 5 arjés. Estructura dinámica sobre la que se asienta toda la Creación.
		</p>
		<p>
			<strong>Y cuanto más perceptible es su inexistencia más presente está.</strong>
		</p>
	</div>
	<div class="col_13 col_s2_8">
		<img src="./img/01234_bn.svg" alt="" />
	</div>

	<div class="col_13">
		<Img src="./img/grafico-8.svg" alt="" />
	</div>


	<div class="col_13">
		<p>
			En ocasiones ni siquiera necesitas no estar viendo algo para estar viendo algo. Si vamos a
			descifrar la Creación vamos a tener que acostumbrarnos a las paradojas.
		</p>
		<p>
			Del griego hermeneutikos; Hermeneuo (Yo descifro) y Tekné (Arte, técnica, tejer). La
			Hermenéutica nace como "el arte o la técnica de explicar, descifrar o interpretar". Así que
			para explicar o descifrar algo, luego veremos el qué, primeramente yo tengo que hacer una
			hermenéutica de ese "algo", averiguar algo que vendrá recogido en alguna otra parte.
		</p>
	</div>
</div>

<div class="dg">
	<div class="col_13 tac p_3">
		<Header tipo={1} variante={3} title="Los 5 Principios Universales" subtitle="" />
	</div>
</div>

<Section id="principios" variante={7} bg_color="bgc_0">
	<Tabs {tabHeaders} />
</Section>
