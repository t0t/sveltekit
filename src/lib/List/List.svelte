<script>
	export let tipo = 0;
	export let clases = '';
	export let variante = 0;
	export let marker = '';
	const clase = ['List_0', 'List_1', 'List_2', 'List_3', 'List_4', 'List_5', 'List_6', 'List_7'];
</script>

{#if tipo === 0}
	<ul class="{clase[variante]} {clases}" style="list-style-image: url('{marker}');">
		<slot />
	</ul>
{:else if tipo === 1}
	<div class={clases}>
		<slot />
	</div>
{:else if tipo === 2}
	<dl class="{clase[variante]} {clases}">
		<slot />
	</dl>
{:else if tipo === 3}
	<nav class="{clase[variante]} {clases}">
		<slot />
	</nav>
{:else if tipo === 4}
	<ul class="{clase[variante]} {clases}">
		<slot />
	</ul>
{:else if tipo === 5}
	<article class="{clase[variante]} {clases}">
		<slot />
	</article>
{:else}
	<ol class="{clase[variante]} {clases}">
		<slot />
	</ol>
{/if}

<style lang="scss">
	@use "../../app.scss" as *;

	:global(ul) {
		margin-top: 0;
		@include media(s3) {
			max-width: $bp2;
			margin-left: auto;
			margin-right: auto;
		}
	}

	:global(li) {
		text-align: left;
		@include media(s4) {
			@include type-setting(1);
		}
	}
	/* :global(dt) {
		font-weight: bold;
		margin-top: $h2;
		margin-bottom: $h0;
	}
	:global(dd) {
		margin-bottom: $h0;
		margin-left: $h2;
	} */

	:global(::marker) {
		/* revisar */
		color: inherit;
	}

	.List_0 {
		text-align: left;
	}
	.List_1 {
		/* margin-top: $h1; */
		display: grid;
		grid-auto-flow: column;
		place-items: center;
		gap: $h1;
		/* color: $grey_2; */
	}
	/* Grouped borderer buttons */
	.List_2 {
		display: grid;
		grid-auto-flow: column;
		/* margin-top: $h2; */
		place-content: center;

		:global(a:nth-child(1)) {
			border-left: 1px solid $grey_3;
		}
	}
	/* tabs */
	.List_3 {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(187px, 0.186fr));
		place-content: space-evenly;
		background-color: $grey_3;
		:global(a:nth-child(1)) {
			border-left: 1px solid $grey_3;
		}
		@include media(s1) {
			grid-template-columns: none;
			grid-auto-flow: column;
			place-content: center;
		}
	}
	/* Nav horizontal grande */
	.List_4 {
		/* display: grid;
		width: 100vw; */
		/* min-height: 50vh; */
		grid-template-columns: repeat(auto-fit, minmax(170px, 1fr) );
		grid-auto-rows: min-content;
		grid-auto-flow: dense;
		text-align: center;
		/* place-content: center;
		place-items: center; */

		@include media(s2) {
			padding-right: 0;
		}
		/* @include media(s3) {
			grid-template-columns: repeat(auto-fit, minmax(245px, 0.186fr));
		} */
	}
	.List_5 {
		display: grid;
		place-items: center;
	}
	.List_6 {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		padding-left: $h0;

		@include media(s1) {
			padding-left: 0;
			padding-right: 0;
			height: 100%;
			/* grid-template-columns: repeat(auto-fit, minmax(250px, auto)); */
			grid-template-rows: auto auto;
		}
		@include media(s2) {
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
			grid-template-rows: auto;
		}
		@include media(s3) {
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		}
	}

	.List_7 {
		/* listas horizontales de articulos */
		display: grid;
		grid-auto-flow: column;
	}
</style>
