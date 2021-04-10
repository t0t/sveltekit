<!-- comentario -->
<script>
    import Button from '$lib/Button.svelte';

    export let title = ""
    export let subtitle = ""
    export let text = ""
    export let img = ""
    export let is_home = false
    export let is_products_page = false
    export let tipo = 0
    export let variante = 0
    const modificador = [
        "Header_0", "Header_1", "Header_2", "Header_3", "Header_4", "Header_5", "Header_6", "Header_7"
    ]
    export let textalign = "align-center" // Clases externas especificas para alinear texto

    let innerWidth, innerHeight, y;
</script>

<style lang="scss">	
	@use "../app.scss" as *;

    .Header_0 {
        display: grid;
        place-content: center;
        min-height: 50vh;
        background-color: $grey_4;
        text-align: center;
        padding: 0 $h2;
        color: $grey_1;
        
        @include media(s2) {
            color: $grey_0;
            grid-template-areas: "title" "text";
            background-size: cover;
            background-position: top center;
            background-attachment: fixed;
            height: 100vh;
            background-position: center;
        }
    }
    .Header_1 {
        display: grid;
        min-height: $h7;
        color: $grey_4;
        background-color: $highlight;
        text-align: left;
        padding: 0 $h2 $h2;
        place-content: end;
        @include media(s1) {
            place-content: center;
            text-align: center;
        }
        @include media(s3) {
            padding: 0;
        }
    }
    .Header_2 {
        display: grid;
        place-content: center;
        padding-top: $h2;
        padding-bottom: $h2;
        h1 {
            color: $grey_3;
            @include type-setting(1);
            font-weight: normal;
        }
        /* min-height: 50vh; */
        /* background-color: $grey_1; */
        
        /* @include media(s2) {
            min-height: 100vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        } */
    }
    .Header_3 {
        padding-top: $h2;
        padding-bottom: $h2;
        text-align: center;
        /* color: $grey_2; */
        h1 {
            @include type-setting(1);
        }
    }
    .Header_4 {
        padding: $h3;
        color: $grey_2;
        background-color: $grey_4;
        /* h1 {
            @include type-setting(1);
        } */
    }
    .Header_5 {
        color: inherit;
        padding: $h3;
        background-color: $white;
        /* h1 {
            @include type-setting(1);
        } */
    }
    .Header_6 {
        color: inherit;
        h2 {
            color: $grey_2;
        }
    }
    .Header_7 {
        color: inherit;
        padding-bottom: $h2;
        /* h1 {
            @include type-setting(1);
        } */
    }
</style>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={y} />

{#if tipo === 1}
    <header class="{modificador[variante]} {textalign}">
        <h1> {title} <br>
            <span>
                {@html subtitle} 
            </span>
        </h1>
    </header>
     
{:else if tipo === 2}
    <!-- con foto de fondo -->
    <header 
    class="{modificador[variante]} {textalign}"
    style="opacity: { 1 - Math.max(0, y / (innerHeight/1.5)) };">

        <h1> {title} <br>
            <span>
                <h2> {@html subtitle} </h2>
            </span>
        </h1>

        <slot/>
    
    </header>
{:else if tipo === 3}
    <header class="{modificador[variante]} {textalign}">
        <h2> {title} </h2>
        <h3> {@html subtitle} </h3>
    </header>
{:else}
<header class="{modificador[variante]} {textalign}">
    <slot></slot>
</header>

{/if}


