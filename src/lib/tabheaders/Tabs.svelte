<script>
    import GridBase from "$lib/GridBase.svelte"
    import Section from "$lib/Section.svelte"
    import Article from "$lib/Article.svelte"
    // import Button from "$lib/Button.svelte"
	export let tabsContent = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<nav>
	{#each tabsContent as item}
        <button 
        class={activeTabValue === item.id ? 'active' : ''}
        on:click={ handleClick(item.id) }>{item.title}</button>
	{/each}
</nav>

{#each tabsContent as item}
    {#if activeTabValue == item.id}
    <Article variante={6}>
        <GridBase variante={3}>
            <figure slot="subarea1">
                <img src={item.img} alt={item.subtitle}>
                <figcaption>{item.subtitle}</figcaption>
            </figure>
            <p>{@html item.content}</p>
            <small slot="subarea2">{item.tags}</small>
        </GridBase>
    </Article>
    {/if}
{/each}

<style lang="scss">
	@use "../../app.scss"as *;
	
    nav {
        display: grid;
        grid-auto-flow: column;
        @include media(s2) {
            justify-content: center;
            background-color: $grey_1;
        }

        button {
            border: none;
            color: $grey_4;
            font-size: inherit;
            background-color: $grey_0;

            &:hover {
                background-color: $white;
                color: $grey_5;
                cursor: pointer;
            }
        }
    }

    figcaption {
        padding: $h1;
        text-align: center;
    }

    .active {
        color: $black;
        background-color: $white;
    }
</style>
