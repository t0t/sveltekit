<script>
    import Section from "$lib/Section.svelte";
    import AboutMeTxt from "$lib/aboutmetxt/AboutMeTxt.svelte";
    import Skillsbar from "$lib/skillsbar/Skillsbar.svelte";
    import Header from "$lib/Header.svelte";
</script>

<Section id="aboutmetxt" variante={7} bg_color="bgc_0">
	<AboutMeTxt />
</Section>

<Header tipo={1} variante={4}
	title="Technical Skills" />

<Section id="skillsbar" variante={1} bg_color="bgc_4">
	<Skillsbar />
</Section>