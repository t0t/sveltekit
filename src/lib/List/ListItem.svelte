<script>
	export let href = "";
	export let alt = "";
	export let target = "";
	export let tipo = 0;
	export let variante = 0;
	const clase = ['ListItem_0', 'ListItem_1', 'ListItem_2'];
</script>

{#if tipo === 0}
	<li class={clase[variante]}> <slot /> </li>
{:else if tipo === 1}
    <slot class={clase[variante]}></slot>
{:else if tipo === 2}
    <a class={clase[variante]} {href} {alt} {target}><slot/></a>
{:else}
	<div class={clase[variante]}> <slot /> </div>
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
        @include type-setting(0);
	}
	.ListItem_1 {
		color: $grey_2;
        padding: $h0;
        border: 1px solid $grey_1;
	}
	.ListItem_2 {
        @include type-setting(0);
        font-style: italic;
		color: $highlight;
        align-self: start;
	}
</style>
