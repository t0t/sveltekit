<script>
    export let text = "blockquote";
    
    export let variante = 0;
    let modificador = [
        "Blockquote_0", "Blockquote_1"
    ];
    export let align = "tac"
    export let color = "grey_0"
</script>

<blockquote class="
{modificador[variante]} {align} {color}
">
    <slot>
        <q>{text}</q>
    </slot>
    <slot name="author"></slot>
</blockquote>

<style lang="scss">
    @use "../app.scss" as *;
    
    blockquote {
        font-style: italic;
        padding-bottom: $h1;
        padding-right: $h3;
        @include type-setting(0);

        /* @include media(s2) {
            @include type-setting(1);
        } */
        /* @include media(s5) {
            @include type-setting(2);
        } */
    }

    .Blockquote_0 {
        max-width: 75%;
        
        :global(span) {
            color: $grey_1;
            @include type-setting(0);
            font-style: normal;
        }
    }

    .Blockquote_1 {
        /* padding-bottom: $h2; */
        font-weight: normal;
    }
</style>