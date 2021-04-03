
<script>
    import Banner from "./Banner.svelte";
	import Button from "$lib/Button.svelte";
</script>

<Banner
    variante={1}
    title="CTA Banner"
    text="Labore est temporibus odit, exercitationem et magnam"
    img="./img/bg1.jpg"
>
    <Button
        variante={1}
        text="cta text"
        url="#"
    />
</Banner>