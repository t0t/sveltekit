<script>
	import '../app.scss';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<main>
	<Nav />
	
	<section>
		<slot />
	</section>

	<Footer />
</main>