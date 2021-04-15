<script>
    export let text = "blockquote";
    
    export let variante = 0;
    let modificador = [
        "Blockquote_0", "Blockquote_1"
    ];
</script>

<blockquote class="{modificador[variante]} ">
    <slot>
        <q>{text}</q>
    </slot>
    <slot name="author"></slot>
</blockquote>

<style lang="scss">
    @use "../app.scss" as *;
    
    blockquote {
        font-style: italic;
        @include type-setting(0);
    }

    .Blockquote_0 {
        max-width: 75%;
        
        :global(span) {
            @include type-setting(0);
            font-style: normal;
        }
    }

    .Blockquote_1 {
        display: grid;
        font-weight: normal;
        place-items: center;
        height: 100%;
        /* width: 100%; */
        @include media(s2) {
            /* max-width: 60%; */
            @include type-setting(1);
        }
    }
</style>