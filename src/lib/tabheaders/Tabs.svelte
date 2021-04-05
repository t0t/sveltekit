<script>
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
		<article>
            <h2>{item.title}
                <span>{item.subtitle}</span>
            </h2>
			<p>{@html item.content}</p>
		</article>
	{/if}
{/each}

<style lang="scss">
	@use "../../app.scss"as *;
	
    nav {
        display: grid;
        grid-auto-flow: column;
        padding-top: 0;

        button {
            padding: $h2 $h1;
            border: none;
            color: $grey_4;
            background-color: $grey_0;
            &:hover {
                background-color: $grey_1;
                color: $grey_5;
                cursor: pointer;
            }
        }
    }
    article {
        padding: $h3;
    }
    .active {
        color: $black;
        background-color: $grey_1;
    }
</style>
