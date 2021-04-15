<script>
    import Grid from "$lib/Grid.svelte";
	import List from "$lib/List/List.svelte"
	import ListItem from "$lib/List/ListItem.svelte"
    import Button from "$lib/Button.svelte";
    import Img from "$lib/Img.svelte";

    export let tabHeaders = []
    let activeTabValue = 1;
    const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<List tipo={3} variante={3}>

    {#each tabHeaders as item}
    <ListItem tipo={1}>
        <span class={activeTabValue === item.id ? 'active' : ''}>
            <Button variante={8}
            on:click={handleClick(item.id)} text={item.title} />
        </span>
    </ListItem>
    {/each}

</List>

{#each tabHeaders as item}
    {#if activeTabValue == item.id}
    <List tipo={5} variante={7}>

        <div class="dg cg_s2_1 p_2 bgc_0 c_5">
            
            <div class="col_13 col_s2_5">
                <Img variante={5} src={item.img} alt={item.subtitle}/>
            </div>
            
            <div class="col_13 col_s2_8">
                <p>{@html item.content}</p>
            </div>
            
                <!-- <div>
                    <List tipo={0} variante={1}>
                        {#each item.tags as tag}
                        <ListItem tipo={0} variante={2}>
                            {tag}
                        </ListItem>
                        {/each}
                    </List>
                </div> -->
            <!-- </div> -->

        </div>

    </List>
    {/if}
{/each}

<style lang="scss">
	@use "../../app.scss"as *;
    figcaption {
        padding-top: $h1;
        text-align: center;
    }
    .active {
        color: $black;
        background-color: $grey_0;
        width: 100%;
    }
    span {
        text-align: center;
        width: 100%;
    }
</style>
