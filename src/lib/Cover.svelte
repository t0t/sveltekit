<script>
    // import {animateScroll} from "svelte-scrollto";
    // import { backIn } from 'svelte/easing';
    import Button from '$lib/Button.svelte';

    export let title = " "
    export let subtitle = " "
    export let text = " "
    export let img = " "
    export let is_home = false
    export let is_products_page = false

    let innerWidth, innerHeight, y;
</script>

<style lang="scss">	
	@use "../app.scss" as *;
    
    .Cover {
        height: 100px;
        color: $highlight;
        background-size: cover;
        background-position: top center;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: start;
        background-repeat: no-repeat;
        padding-left: 90px;
        padding-top: 35px;
        background-image: none;
        
        @include media(s2) { 
            background-attachment: fixed;
        }

        @include media(s2) {
            padding: $h3;
            justify-content: center;
            height: 100vh;
            background-position: center;
            display: grid;
            align-items: end;
            grid-template-areas: "title" "text";
            text-align: center;
        }
        
        .CoverTitle {
            @include media(s1) {
                grid-area: title;
                display: flex;
                flex-direction: column;
            }
        }
        .CoverSubTitle {
            margin-top: 0;
            text-shadow: none;
            display: none;

            @include media(s2) {
                display: inherit;
                color: $grey_0;
            }
        }
        .CoverText {
            display: none;
            @include media(s2) {
                display: inherit;
                padding-top: $h2;
                grid-area: text;
                border-top: 1px dotted $grey_0;
            }
        }
    }
    .is_home {
        height: 27vh;
        @include media(s2) {
            height: 100vh;
        }
    }
</style>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={y} />

<header 
    class="Cover"
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
    <p>{text}</p>

    {#if is_products_page}
    <div class="CoverText">
        <Button variante={5} text="ᐯ"/>
    </div>
    {/if}
</header>