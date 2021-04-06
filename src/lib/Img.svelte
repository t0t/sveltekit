<script>
    export let src;
    export let alt = "Imagen";
    export let href = undefined;
    export let variante = 0;
    const modificadores = [
        "Img_0",
        "Img_1",
        "Img_2",
        "Img_3",
        "Img_4",
        "Img_5"
    ];
</script>

<style lang="scss">
	@use "../app.scss" as *;

    .Img_0 {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        max-width: 100%;
        min-height: 50vh;
    }
    .Img_1 { 
        min-height: 50vh;
        object-fit: fill;
        @include media(s3) {
            border-top: $h3 solid $grey_1;
        }
    }
    .Img_2 {
        min-height: 50vh;
        position: relative;
        figcaption {
            @include type-setting(-1);
            position: absolute;
            left: $h2;
            bottom: $h2;
        }
    }
    .Img_3 {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        max-width: 100%;
        min-height: 50vh;
        border-left: $h3 solid $grey_1;
        border-top: $h3 solid $grey_3;
    }
    .Img_4 {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        max-width: 100%;
        min-height: 50vh;

        @include media(s2) {
            border-bottom: $h3 solid $grey_4;
        }
    }
    .Img_5 {
        border-bottom: $h3 solid $grey_4;
        background-size: cover;
        // border-radius: 50%;
        // width: 50vh;
        min-height: 50vh;
    }
</style>


{#if (variante === 0 || variante === 3 || variante === 4)}

    <div 
        class={modificadores[variante]}
        style="background-image:url({src});"
    ></div>

{:else if (variante === 1 || variante === 5)}

    <img {src} {alt} {href} 
        class={modificadores[variante]} />

{:else}

    <figure class={modificadores[variante]}>
        <img {src} {alt} {href} />
        <figcaption class="alt">{alt}</figcaption>
    </figure>

{/if}