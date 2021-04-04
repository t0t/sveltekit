<script>
	import '../app.scss';
	// import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import { pages } from "$lib/data/pages.js";
	
	let current_page = "";
	const setCurrentPage = (e) => {
        current_page = e.srcElement.firstChild.data
    }

</script>

<svelte:head>
	<title>SvelteKit UI - {current_page}</title>
</svelte:head>

<main>
	<nav>
		{#each pages as page}
			<a href="{page.url}"
			class:active={current_page === page.name}
			on:click={setCurrentPage}
			>{page.name}</a>
		{/each}
	</nav>
	
	<section>
		<slot />
	</section>

	<Footer />
</main>

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