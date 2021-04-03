<script>
    export let title = '';
    export let text = '';
    export let img = '';
    export let variante = 0;
    let modificador = ['variante_0', 'variante_1'];
</script>

<div class="Banner {modificador[variante]}">
    <div class="BannerMedia">
        {#if img}
            <slot name="hasimage">
                <img src={img} alt="Imagen" />
            </slot>
        {/if}
        <slot name="hasvideo"></slot>
        <slot name="hasSVG"></slot>
    </div>

    <div class="BannerText">
        <h2>{title}</h2>
        <p>{@html text}</p>
        <slot />
    </div>
</div>

<style lang="scss">
	@use "../../app.scss" as *;

    .Banner {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: 'media' 'texto';

        img {
            width: 100%;
        }

        :global(video) {
            width: 100%;
            object-fit: cover;
            /* mix-blend-mode: luminosity; */
            /* border-radius: $h2; */
        }

        @include media(s2) {
            padding-bottom: 0;
            padding-right: 0;
            grid-template-columns: 1fr 1.62fr;
            grid-template-areas: 'texto media';
        }

        .BannerMedia {
            grid-area: media;
        }

        .BannerText {
            display: grid;
            justify-items: start;
            align-self: center;
            justify-self: center;
            grid-area: texto;
            padding-left: $h3;

            @include media(s2) {
                margin-bottom: 0;
                margin-right: $h2;
                max-width: $bp1;
            }
            h2 {
                font-weight: bold;
                margin-top: $h0;
                margin-right: 0;
                margin-bottom: $h0;
                margin-left: 0;
                @include media(s1) {
                    font-weight: inherit;
                }
            }
        }
    }
    .variante_0 {
        background-color: $grey_5;
    }
    .variante_1 {
        color: $black;
    }
</style>
