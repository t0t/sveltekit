<script>
    import Button from '$lib/Button.svelte';

    export let title = ""
    export let subtitle = ""
    export let text = ""
    export let img = ""
    export let is_home = false
    export let is_products_page = false

    export let variante = 0
    const modificador = [
        "Cover_0",
        "Cover_1",
        "Cover_2"
    ]

    let innerWidth, innerHeight, y;
</script>

<style lang="scss">	
	@use "../app.scss" as *;

    .is_home {
        height: 27vh;
        @include media(s2) {
            height: 100vh;
        }
    }
    .Cover_0 {
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
    .Cover_1 {
        display: grid;
        place-content: center;
        min-height: 50vh;
        color: $grey_4;
        background-color: $highlight;
        text-align: left;
        padding: 0 $h2;
        @include media(s2) {
            text-align: center;
        }
        .CoverTitle {
            color: $secondary;
            span {
                color: $grey_4;
            }
        }
    }
    .Cover_2 {
        display: grid;
        place-content: center;
        min-height: 50vh;
        color: $grey_5;
        background-color: $grey_1;
        text-align: center;
        
        @include media(s2) {
            min-height: 100vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
</style>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={y} />

<header 
    class={modificador[variante]}
    class:is_home
    style=" 
    opacity: { 1 - Math.max(0, y / (innerHeight/1.5))};
    background-image: url( { innerWidth > 769 || is_home ? img : ''})
    ">

    <h1 class="CoverTitle">
        {title} <br>
        <span>
            <h2 class="CoverSubTitle"> {@html subtitle} </h2>
        </span>
    </h1>
    
    <div class="CoverText">
        <p>{text}</p>
    
        {#if is_products_page}
            <Button variante={5} text="ᐯ"/>
        {/if}
    </div>
</header>