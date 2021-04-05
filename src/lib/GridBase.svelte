<script>
    export let variante = 0;
    const modificador = [
        "Grid_0",
        "Grid_1"
    ];
</script>

<div class={modificador[variante]}>
    <div><slot name="subarea1"></slot></div>
    <div><slot></slot></div>
    <div><slot name="subarea2"></slot></div>
</div>

<style lang="scss">
	@use "../app.scss" as *;
    
    .Grid_0 {
        display: grid;
        min-height: 50vh;
        grid-template-areas: 
            "main"
            "subarea1"
            "subarea2"
        ;
        @include media(s2) {
            grid-template-areas: 
                "main main main subarea1"
                "main main main subarea2"
            ;
        }
        *:nth-child(1) {
            grid-area: subarea1;
            background-color: $grey_3;
            display: grid;
            place-content: center;
        }
        *:nth-child(2) {
            grid-area: main;
            background-color: grey_2;
        }
        *:nth-child(3) {
            grid-area: subarea2;
            display: grid;
            place-content: center;
            background-color: $grey_1;
        }
    }
    .Grid_1 {
    }
</style>