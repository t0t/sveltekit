<script>
    export let title;
    export let src;
</script>

<figure>
    <img src={src} alt="{title}">
    <figcaption>{title}</figcaption>
</figure>

<style>
    figure {
        max-width: 100vw;
    }
    img {
        max-width: 100%;
        height: auto;
    }
</style>