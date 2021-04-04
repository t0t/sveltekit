<script>
    import { secondaryNav } from "$lib/data/pages.js";
</script>

<nav>
    {#each secondaryNav as {url, name}}
        <a 
            href="{url}"
            class="NavItem"
            role="navigation" 
        >
            {name}
        </a>
    {/each}
</nav>

<style lang="scss">
    @use "../app.scss" as *;

    nav {
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        gap: $h4;
        justify-content: center;
        align-content: center;
        background-color: $highlight;
        width: 100%;
        min-height: 50vh;
        padding: $h4 0;
        margin-left: auto;
        margin-right: auto;
        
        a {
            text-align: center;
            /* display: block; */
            width: 100%;
            border: none;
            color: $grey_5;
            p {
                text-align: center;
            }
        }
    }
</style>