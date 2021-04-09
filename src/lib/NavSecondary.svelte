<script>
    import List from "$lib/List/List.svelte";
    import ListItem from "$lib/List/ListItem.svelte";

    export let secondaryNav = [{}];
    export let url = "";
    export let name = "";
    export let description = "";
    export let variante_item = "4";
    export let variante_list = "4";
    export let tipo = "4";
</script>

<List tipo={3} variante={variante_list}>

    {#each secondaryNav as {url, name, description}}

        <ListItem tipo={2} variante={variante_item}
        href={url} alt={name}>
            
            {name} <span>{description}</span>
        
        </ListItem>

    {/each}

</List>

<!-- <style lang="scss">
    @use "../app.scss" as *;
</style> -->