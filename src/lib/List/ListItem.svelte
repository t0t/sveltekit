<script>
	// import Button from "$lib/Button.svelte";
	export let href = '';
	export let alt = '';
	export let target = '';
	export let id = '';
	export let rel = '';
	export let clases = '';
	export let tipo = 0;
	export let variante = 0;
	const modificador = [
		'ListItem_0',
		'ListItem_1',
		'ListItem_2',
		'ListItem_3',
		'ListItem_4',
		'ListItem_5',
		'ListItem_6',
		'ListItem_7',
		'ListItem_8',
		'ListItem_9'
	];
</script>

{#if tipo === 0}
	<li class={modificador[variante]}><slot /></li>
{:else if tipo === 1}
	<slot class={modificador[variante]} />
{:else if tipo === 2}
	<a class={modificador[variante]} {href} {alt} {target}><slot /></a>
{:else if tipo === 3}
	<button class="{clases} {modificador[variante]}" {id} on:click> <slot /></button>
{:else if tipo === 4}
	<div class={clases}><slot /></div>
{:else}
	<div class={modificador[variante]}><slot /></div>
{/if}

<style lang="scss">
	@use "../../app.scss" as *;

	:global(a) {
		@include type-setting(0);
	}
	:global(li) {
		margin-top: $h1;
		@include media(s3) {
			max-width: $bp2;
			margin-left: auto;
			margin-right: auto;
		}
	}
	
	.ListItem_0 {
		text-align: center;
		padding: $h1;
		border-top: 1px solid $grey_5;
		border-right: 1px solid $grey_5;
		border-bottom: 1px solid $grey_5;
		@include type-setting(0);
		height: 100%;
		color: $grey_4;
		&:hover {
			color: $white;
			background-color: $grey_4;
		}
	}
	.ListItem_1 {
		color: $grey_1;
		display: grid;
		place-content: center;
		text-align: center;
		@include type-setting(0);
		border-top: 0.5px solid $border_color;
		padding-top: $h0;
		padding-bottom: $h0;
		padding-right: $h0;

		&:hover {
			color: $grey_5;
			background-color: $grey_1;
		}
		@include media(s3) {
			border-left: 0.5px solid $border_color;
			padding-bottom: $h0;
			padding-left: $h0;
		}
	}
	.ListItem_2 {
		@include type-setting(0);
		font-style: italic;
		color: $highlight;
		align-self: start;
	}
	.ListItem_3 {
		color: $grey_0;
		align-self: start;
	}
	
	/* Botonera styleguide */
	.ListItem_4 {
		@include type-setting(0);
		padding: $h1;
		align-self: start;
		background-color: $secondary;
		&:hover {
			color: $grey_5;
			filter: opacity(70%);
		}
		&.active {
			color: $grey_1;
			background-color: $grey_4;
		}
	}

	/* nav - circulos horizontales */
	.ListItem_5 {
		@include type-setting(0);
		padding: $h1;
		border-radius: 50%;
		border: 1px solid $grey_5;
		color: $grey_4;
		display: grid;
		place-items: center;
		width: $h6;
		height: $h6;
		&:hover {
			color: $white;
			background-color: $grey_4;
		}
		@include media(s3) {
			width: $h6 + $h4;
			height: $h6 + $h4;
		}
		@include media(s4) {
			@include type-setting(1);
			width: $h6 + $h4;
			height: $h6 + $h4;
		}
	}
	.ListItem_6 {
		text-decoration: none;
		color: $grey_2;
		@include type-setting(0);
	}
	.ListItem_7 {
		@include type-setting(0);
		padding: $h1;
		border-radius: 50%;
		border: 1px solid $grey_0;
		color: $grey_0;
		display: grid;
		place-items: center;
		place-content: center;
		width: $h6;
		height: $h6;

		:global(span) {
			color: $primary;
			@include type-setting(0);
		}
		&:hover {
			color: $white;
			background-color: $grey_4;
		}
		@include media(s3) {
			width: $h6 + $h4;
			height: $h6 + $h4;
		}
		@include media(s4) {
			@include type-setting(1);
			width: $h6 + $h4;
			height: $h6 + $h4;
		}
	}

	.ListItem_8 {
		/* nav - next-prev */

		:global(.next),
		:global(.prev) {
			position: absolute;
			bottom: $h2;
			color: $white;
			background-color: $black;
			width: $h3;
			height: $h3;
			display: grid;
			place-content: center;
			box-sizing: border-box;
			border: none;
			border-radius: 50%;
			@include type-setting(1);
		}
		:global(.next:hover),
		:global(.prev:hover) {
			color: $black;
			background-color: $white;
			cursor: pointer;
		}

		:global(.next) {
			right: $h2;
		}

		:global(.prev) {
			right: $h2 + $h3;
		}
	}

	.ListItem_9 {
		/* nav - Links footer */
		:global(svg) {
			width: $h2;
			fill: $grey_2;
			&:hover {
				fill: $highlight;
			}
		}
	}
</style>
