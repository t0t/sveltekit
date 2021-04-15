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

    let innerWidth, innerHeight, y;
</script>

<!-- <svelte:window bind:innerWidth bind:innerHeight bind:scrollY={y} /> -->

{#if tipo === 1}
    <header class="{modificador[variante]} ">
        <h1> {title} <br>
            <span>
                {@html subtitle} 
            </span>
        </h1>
    </header>
     
{:else if tipo === 2}
    <!-- con imagen de fondo -->
    <header class="{modificador[variante]}"
    style="background-image: url('{img}')"
    >

        <h1> {title} <br>
            <span>
                <h2> {@html subtitle} </h2>
            </span>
        </h1>
    
    </header>

{:else if tipo === 3}

    <header class="{modificador[variante]} ">
        <h2> {title} </h2>
        <h3> {@html subtitle} </h3>
    </header>
{:else}

<header class="{modificador[variante]} ">
    <slot></slot>
</header>

{/if}

<style lang="scss">	
	@use "../app.scss" as *;

    .Header_0 {
        display: grid;
        place-content: center;
        color: inherit;
        height: 100%;
        background-position: center;
        background-size: 120%;
        background-repeat: no-repeat;
        
        @include media(s2) {
            /* background-position: $h7 50%; */
            /* background-attachment: fixed; */
        }
    }
    .Header_1 {
        display: grid;
        align-content: center;
        color: inherit;
        height: 100%;

        @include media(s1) {
            place-content: center;
        }
    }
    .Header_2 {
        display: grid;
        place-content: center;
    }
    .Header_3 {
        color: inherit;
    }
    .Header_4 {}
    .Header_5 {
        color: inherit;
    }
    
    .Header_6 { 
        color: inherit;
        margin-bottom: $h1;
        h2 {
            font-weight: bold;
        }
        h3 {
            font-style: italic;
        }
    }
    .Header_7 {
        color: inherit;
    }
</style>
