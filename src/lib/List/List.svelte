<script>
	export let tipo = 0;
	export let variante = 0;
    export let marker = "";
	const clase = ['List_0', 'List_1', 'List_2'];
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
	.List_2 {
		display: grid;
		grid-template-columns: repeat(3, 1fr );
		gap: $h1;
		color: $highlight;
	}
</style>
