<script>
	// import Grid from '$lib/Grid.svelte';
	import List from '$lib/List/List.svelte';
	import ListItem from '$lib/List/ListItem.svelte';
	import Button from '$lib/Button.svelte';
	import Img from '$lib/Img.svelte';

	export let clases = '';
	export let tabHeaders = [];
	let activeTabValue = 1;
	const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<div class={clases}>
	<List tipo={3} variante={3}>
		{#each tabHeaders as item}
			<ListItem tipo={1}>
				<span class={activeTabValue === item.id ? 'active' : ''}>
					<Button variante={8} on:click={handleClick(item.id)} text={item.title} />
				</span>
			</ListItem>
		{/each}
	</List>

	{#each tabHeaders as item}
	{#if activeTabValue == item.id}

		<List tipo={5} variante={0}
		clases="dg gc_58 gc_bp1_1 rg_2 p_3 bgc_0 cg_2 c_5">

			<Img variante={1} src={item.img} alt={item.subtitle} clases="maxh_s2_5"/>

			<p class="ml_0">{@html item.content}</p>

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
		</List>

	{/if}
	{/each}
</div>

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
