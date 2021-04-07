<script>
	import Form from '$lib/Form.svelte';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';
	import Alert from '$lib/Alert.svelte';

	let gematria = new Map([
		['\u05D0', 1], //'alef', '‎א'
		['\u05D1', 2], //'bet', 'ב‎'
		['\u05D2', 3], //'guimel', 'ג‎'
		['\u05D3', 4], //'dalet', 'ד‎'
		['\u05D4', 5], //'he', 'ה‎'
		['\u05D5', 6], //'vav', 'ו‎'
		['\u05D6', 7], //'tzain', 'ז‎'
		['\u05D7', 8], //'jet', 'ח‎'
		['\u05D8', 9], //'tet', 'ט‎'
		['\u05D9', 10], //'yod', 'י‎'
		['\u05DB', 20], //'kaf', 'כ'
		['\u05DC', 30], //'lamed', 'ל‎'
		['\u05DE', 40], //'mem', 'מ'
		['\u05DF', 50], //'nun', 'נ'
		['\u05E1', 60], //'samej', 'ס‎'
		['\u05E2', 70], //'ayin', 'ע‎'
		['\u05E4', 80], //'pe', 'פ'
		['\u05E6', 90], //'tzadic', 'צ'
		['\u05E7', 100], //'kof', 'ק‎'
		['\u05E8', 200], //'resh', 'ר‎'
		['\u05E9', 300], //'shin', 'ש‎'
		['\u05EA', 400], //'tav', 'ת‎'
		['\u05DA', 500], //'kaf_sofit', 'ך‎'
		['\u05DD', 600], //'mem_sofit', 'ם‎'
		['\u05DF', 700], //'nun_sofit', 'ן‎'
		['\u05E3', 800], //'pe_sofit', 'ף‎'
		['\u05E5', 900] //'tzadi_sofit', 'ץ‎'
	]);
	let valorinput = '';
	let haserror = false;
	let errormessage = '';
	$: counter = 0;
	let arrayASumar = [];
	let splited = [];

	function handleSubmit() {
		haserror = false;
		counter = 0;
		valorinput = valorinput;
		splited = valorinput.split('');
		errormessage = '';
		for (const s of splited) {
			if (s == '\u05D0') {
				counter += 1;
			} else if (s == '\u05D1') {
				counter += 2;
			} else if (s == '\u05D2') {
				counter += 3;
			} else if (s == '\u05D3') {
				counter += 4;
			} else if (s == '\u05D4') {
				counter += 5;
			} else if (s == '\u05D5') {
				counter += 6;
			} else if (s == '\u05D6') {
				counter += 7;
			} else if (s == '\u05D7') {
				counter += 8;
			} else if (s == '\u05D8') {
				counter += 9;
			} else if (s == '\u05D9') {
				counter += 10;
			} else if (s == '\u05DB') {
				counter += 20;
			} else if (s == '\u05DC') {
				counter += 30;
			} else if (s == '\u05DE') {
				counter += 40;
			} else if (s == '\u05DF') {
				counter += 50;
			} else if (s == '\u05E1') {
				counter += 60;
			} else if (s == '\u05E2') {
				counter += 70;
			} else if (s == '\u05E4') {
				counter += 80;
			} else if (s == '\u05E6') {
				counter += 90;
			} else if (s == '\u05E7') {
				counter += 100;
			} else if (s == '\u05E8') {
				counter += 200;
			} else if (s == '\u05E9') {
				counter += 300;
			} else if (s == '\u05EA') {
				counter += 400;
			} else if (s == '\u05DA') {
				counter += 500;
			} else if (s == '\u05DD') {
				counter += 600;
			} else if (s == '\u05DF') {
				counter += 700;
			} else if (s == '\u05E3') {
				counter += 800;
			} else if (s == '\u05E5') {
				counter += 900;
			} else if (s == ' ') {
				counter += 0;
			} else {
				haserror = true;
				if ((haserror = true)) {
					errormessage = 'Sólo contabilizan las consonantes hebreas.';
				} else {
					haserror = false;
					errormessage = '';
				}
			}
		}
		return counter;
	}
</script>

<style lang="scss">
	@use "../../../app.scss"as *;

	header {
		text-align: center;
		color: inherit;
	}
	
	main {
		margin-bottom: $h2;
		text-align: center;
		display: grid;
		place-content: center;
		grid-template-areas: 
			"resultado"
			"form"
		;
		color: inherit;
	}
	.position-form {
		grid-area: form;
	}
	.result {
		grid-area: resultado;
		
		font-weight: bold;
		@include type-setting(4);
	}
	p,
	small {
		text-align: center;
		color: inherit;
	}
	small {
		display: block;
		/* margin-top: $h1; */

		a {
			color: $highlight;
			text-decoration: none;
		}
	}
</style>

<header>
	<h2>Gematria App</h2>
	<p>Lo que valen las palabras hebreas</p>
</header>

<main>
	<h2 class="result">{counter}</h2>

	<div class="position-form">
		<Form on:submit={handleSubmit} variante={1}>
			<Input bind:value={valorinput} />
			<Button variante={6} text="Go!" {valorinput} />
		</Form>
	</div>

	{#if haserror == true}
		<Alert>{errormessage}</Alert>
	{/if}
</main>

<footer>
	<small>בראשית ברא אלהים את השמים ואת הארץ (Génesis, 1)</small>
	<small>
		<a href="https://tanach.us/Server.txt?Genesis*&content=Consonants" target="_blank"> 
			Codex de Leningrado
		</a>
	</small>
</footer>
