<script>
    export let variante = 0;
    export let id = "";
    let modificador = [
        "Section_0", "Section_1", "Section_2", "Section_3", "Section_4", "Section_5", "Section_6", "Section_7", "Section_8"
    ];
    export let bg_color = 0
    const bg_colors = [
        "bg_color_0", "bg_color_1", "bg_color_2", "bg_color_3", "bg_color_4", "bg_color_5"
    ];
</script>

<section    {id}
            class="{modificador[variante]} {bg_colors[bg_color]}"
>
    <slot />
</section>

<style lang="scss">	
	@use "../app.scss" as *;
    section {
        padding: $h2;
        @include media(s2){
            padding: $h3;
        }
    }
    .Section_0 {
        min-height: 50vh;
        color: $grey_5;
    }
    
    .Section_1 {
        padding: 0;
        min-height: 50vh;
        color: $white;
    }

    .Section_2 {
        display: grid;
        place-content: center;
        color: $grey_0;
    }
    
    .Section_3 {
        color: $black;
        padding: 0;
    }
    .Section_4 {
        color: $grey_5;
        padding: $h3;
    }
    .Section_5 {
        padding: 0;
        min-height: 50vh;
        color: $grey_5;
        background-color: $white;
    }
    .Section_6 {
        min-height: 50vh;
        color: $grey_0;
    }
    
    .Section_7 { /* timeline */
        min-height: 50vh;
        color: $grey_2;
        padding: 0;
        @include media(s3) {
            margin-left: auto;
            margin-right: auto;
            max-width: $bp3;
        }
    }
    .Section_8 { /* cover */
        color: $grey_1;
        padding: 0;
    }
</style>