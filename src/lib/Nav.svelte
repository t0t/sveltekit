<script>
    import { pages } from "$lib/data/pages.js";
    export let current_page;

    import { clickOutside } from '$lib/clickOutside.js';
    import SiteLogo from '$lib/SiteLogo.svelte'

    let activemenu = false;
    function cuandoClick(event) {
        currentitem = event.path[0].hash
    }
    function contraeMainMenu() {
		activemenu = false
	}
    let active;

    export let variante = 0;
    let modificador = [
        "Variante_0",
        "Variante_1",
        "Variante_2"
    ];
</script>

{#if variante === 1}
    <div class="Variante_1" use:clickOutside on:click_outside={contraeMainMenu}>
        <div class="ButtonNav" on:click={() => { activemenu = !activemenu}}> <SiteLogo /> </div>

        <nav class={ activemenu ? "MainNav MainNavVisible" : "MainNav" }>
        {#each pages as {url, name}}
            <a 
                href="{url}"
                on:click
                class="NavItem"
                class:active={name === current_page}
                on:click={contraeMainMenu}
                role="navigation" 
            >
                {name}
            </a>
        {/each}
        </nav>

    </div>
{:else}
    <nav class={ modificador[ variante ] }>
        {#each pages as {url, name}}
            <a href="{url}"
            on:click
            class:active={name === current_page}
            >
                {name}
            </a>
        {/each}
    </nav>
{/if}

<style lang="scss">
    @use "../app.scss" as *;

    :global(nav>a) {
        color: $primary;
        text-decoration: none;
    }

    .Variante_0 {
        padding: $h3;
        text-align: center;
        a {
            &:hover {
                color: black;
            }    
        }
        .active {
            background-color: $grey_0;
        }
    }
    .Variante_1 {
        .active {
            background-color: transparent;
            color: $white;
            font-weight: bold;
        }
        .MainNav {
            display: none;
            position: fixed;
            top: $h4 + $h1;
            left: 0;
            z-index: 500;
            list-style: none;
            padding-top: $h1;
            padding-bottom: $h0;
            @include type-setting(1);
            background-color: $black;
            
            @include media(s2) {
                @include type-setting(0);
            }
        }
        .NavItem {
            text-decoration: none;
            user-select: none;
            padding: $h0 $h2;
            display: block;
            border: none;
            &:hover {
                color: $white;
            }
        }
        .MainNavVisible {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            flex-direction: column;
            @include animation(slide);
        }
        .ButtonNav {
            position: fixed;
            z-index: 1000;
            top: 21px;
            left: 21px;
            &:hover {
                cursor: pointer;
            }
        }
    }
</style>