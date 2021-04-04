<script>
    import { pages } from "$lib/data/pages.js";
    export let current_page;
</script>

<nav>
    {#each pages as {url, name}}
        <a href="{url}"
        on:click
        class:active={name === current_page}
        >
            {name}
        </a>
    {/each}
</nav>

<style lang="scss">
    @use "../app.scss" as *;
    nav {
        padding: $h3;
        text-align: center;
        a {
            &:hover {
                color: black;
            }    
        }
    }
    .active {
		background-color: $grey_0;
	}
</style>