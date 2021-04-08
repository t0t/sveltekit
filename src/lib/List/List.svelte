<script>
	export let tipo = 0;
	export let variante = 0;
    export let marker = "";
	const clase = ['List_0', 'List_1', 'List_2','List_3','List_4'];
</script>

{#if tipo === 0}
	<ul class={clase[variante]}
    style="list-style-image: url('{marker}');">
		<slot />
	</ul>
{:else if tipo === 1}
	<div class={clase[variante]}>
		<slot />
	</div>
{:else if tipo === 2}
	<dl class={clase[variante]}>
		<slot />
	</dl>
{:else if (tipo === 3)}
	<nav class={clase[variante]}>
		<slot />
	</nav>
{:else if (tipo === 4)}
	<ul class={clase[variante]}>
		<slot />
	</ul>
{:else}
	<ol class={clase[variante]}>
		<slot />
	</ol>
{/if}

<style lang="scss">
	@use "../../app.scss" as *;

	:global(ul) {
		margin-top: $h1;
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
	:global(dt) {
		font-weight: bold;
		margin-top: $h2;
		margin-bottom: $h0;
	}
	:global(dd) {
		margin-bottom: $h0;
		margin-left: $h2;
	}
  
    :global(::marker ) {  /* revisar */
        color: $primary;
    }   
    
	.List_0 {
        color: $black;
	}
	.List_1 {
		margin-top: $h1;
		display: grid;
		gap: $h1;
		grid-template-columns: repeat(5, 1fr);
		place-items: center;
		color: $grey_2;
	}
	/* Grouped borderer buttons */
	.List_2 {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(90px, 0.25fr));
		margin-top: $h2;
		place-content: center;

		:global(a:nth-child(1)) {
			border-left: 1px solid $grey_3;
		}
	}
	/* tabs */
	.List_3 { 
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(90px, 0.25fr));
		place-content: center;
		background-color: $grey_3;
		:global(a:nth-child(1)) {
			border-left: 1px solid $grey_3;
		}
	}
	/* Nav horizontal grande */
	.List_4 { 
		display: grid;
		min-height: 50vh;
		grid-template-columns: repeat(auto-fit, minmax(177px, 0.186fr));
		text-align: center;
		place-content: center;
		place-items: center;
		background-color: $primary;
		padding: $h2 0;

		@include media(s3) {
			grid-template-columns: repeat(auto-fit, minmax(245px, 0.186fr));
		}
	}
</style>
