<script>
    import { secondaryNav } from "$lib/data/pages.js";
    import List from "$lib/List/List.svelte";
    import ListItem from "$lib/List/ListItem.svelte";
    import Button from "$lib/Button.svelte";
</script>

<List tipo={3} variante={4}>

    {#each secondaryNav as {url, name}}

        <ListItem tipo={2} variante={5}
        href={url} alt={name}>{name}</ListItem>

    {/each}

</List>

<!-- <style lang="scss">
    @use "../app.scss" as *;
</style> -->