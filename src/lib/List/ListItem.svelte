<script>
	export let href = "";
	export let alt = "";
	export let target = "";
	export let tipo = 0;
	export let variante = 0;
	const clase = ['ListItem_0', 'ListItem_1', 'ListItem_2','ListItem_3','ListItem_4','ListItem_5'];
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
	.ListItem_3 {
		color: $grey_4;
        align-self: start;
	}
	.ListItem_4 {
        @include type-setting(0);
		padding: $h1;
		border: 1px solid $grey_5;
		color: $grey_4;
        align-self: start;
		&:hover {
			color: $white;
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
</style>
