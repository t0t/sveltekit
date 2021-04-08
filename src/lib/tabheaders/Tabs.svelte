<script>
    import GridBase from "$lib/GridBase.svelte"
    import Section from "$lib/Section.svelte"
    import Article from "$lib/Article.svelte"
    import Button from "$lib/Button.svelte"
	import List from "$lib/List/List.svelte"
	import ListItem from "$lib/List/ListItem.svelte"

	export let tabsContent = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<List tipo={3} variante={3}>
	{#each tabsContent as item}
    <ListItem tipo={1}>
        <span class={activeTabValue === item.id ? 'active' : ''}>
            <Button variante={0}
            on:click={ handleClick(item.id) } text={item.title} />
        </span>
    </ListItem>
	{/each}
</List>

{#each tabsContent as item}
    {#if activeTabValue == item.id}
    <Article variante={6}>
        <GridBase variante={3}>
            <figure slot="subarea1">
                <img src={item.img} alt={item.subtitle}>
                <figcaption>{item.subtitle}</figcaption>
            </figure>
            <p>{@html item.content}</p>
            <div slot="subarea2">
                <List tipo={0} variante={1}>
                    {#each item.tags as tag}
                    <ListItem tipo={0} variante={2}>{tag}</ListItem>
                    {/each}
                </List>
            </div>
        </GridBase>
    </Article>
    {/if}
{/each}

<style lang="scss">
	@use "../../app.scss"as *;

    figcaption {
        padding: $h1;
        text-align: center;
    }

    .active {
        color: $black;
        background-color: $white;
        width: 100%;
    }
    span {
        text-align: center;
        width: 100%;
    }
</style>
