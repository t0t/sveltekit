<script>
    import { secondaryNav } from "$lib/data/pages.js";
    import Button from "$lib/Button.svelte";
</script>

<nav>
    {#each secondaryNav as {url, name}}
        <Button 
            variante={4}
            {url}
            text={name}
        />
    {/each}
</nav>

<style lang="scss">
    @use "../app.scss" as *;

    nav {
        display: grid;
        gap: $h3;
        background-color: $highlight;
        min-height: 50vh;
        padding: $h3;
        grid-template-columns: repeat(auto-fill, minmax(100px, 270px));
        place-content: center;
        
        @include media(s3) {
            grid-template-columns: repeat(3, 1fr);
            gap: $h3;
            place-items: center;
        }
    }
</style>