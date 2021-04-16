<script>
	import '../app.scss';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

	let current_page = '';
	const setCurrentPage = (e) => {
		current_page = e.srcElement.firstChild.data;
	};
</script>

<svelte:head>
	<title>SvelteKit UI - {current_page}</title>
</svelte:head>

<main>
	<Nav on:click={setCurrentPage} {current_page} variante={1} />

	<slot />

	<Footer />
</main>

<!-- <style lang="scss">
	@use "../app.scss" as *;
	
</style> -->
