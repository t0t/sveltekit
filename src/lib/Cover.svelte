<script>
	import Button from '$lib/Button.svelte';
	import Grid from '$lib/Grid.svelte';
	import Section from '$lib/Section.svelte';
	import Header from '$lib/Header.svelte';
	import List from '$lib/List/List.svelte';
	import ListItem from '$lib/List/ListItem.svelte';
</script>

<Grid tipo={1} variante={6}>
	<div class="a" style="background-image:url('./img/bg1.jpg');">
		<Header tipo={2} variante={6} title="Sergio Forés" subtitle="Hermenéutica Holística" />
	</div>
	<div class="b" />
</Grid>

<style lang="scss">
	@use "../app.scss" as *;
</style>
