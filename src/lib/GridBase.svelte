<script>
    export let variante = 0;
    const modificador = [
        "Grid_0",
        "Grid_1",
        "Grid_2",
        "Grid_3",
        "Grid_4"
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
        gap: $h3;
        grid-template-areas: 
            "subarea0"
            "subarea1"
            "subarea2"
        ;
        @include media(s2) {
            grid-template-areas: 
                "subarea1 subarea0"
                "subarea2 subarea0"
            ;
        }
        *:nth-child(1) {
            grid-area: subarea1;
            align-self: end;
            /* margin-bottom: $h2; */
        }
        *:nth-child(2) {
            grid-area: subarea0;
            min-width: 50vw;
            /* margin-bottom: $h4; */
        }
        *:nth-child(3) {
            grid-area: subarea2;
            display: grid;
            align-self: start;
            place-content: center;
        }
    }
    .Grid_1 {
        display: grid;
        min-height: 50vh;
        gap: $h3;
        grid-template-areas: 
            "subarea0"
            "subarea1"
            "subarea2"
        ;
        @include media(s2) {
            grid-template-areas: 
                "subarea0 subarea1"
                "subarea0 subarea2"
            ;
        }
        *:nth-child(1) {
            grid-area: subarea1;
            display: grid;
            align-self: end;
            text-align: center;
        }
        *:nth-child(2) {
            grid-area: subarea0;
            min-width: 50vw;
        }
        *:nth-child(3) {
            grid-area: subarea2;
            display: grid;
            align-self: start;
            place-content: center;
        }
    }
    .Grid_2 {
        display: grid;
        min-height: 50vh;
        gap: $h3;
        grid-template-areas: 
            "subarea0"
            "subarea1"
            "subarea2"
        ;
        @include media(s2) {
            grid-template-areas: 
                "subarea0 subarea1"
                "subarea0 subarea2"
            ;
        }
        *:nth-child(1) {
            grid-area: subarea1;
            align-self: end;

        }
        *:nth-child(2) {
            grid-area: subarea0;
            min-width: 50vw;
            /* margin-bottom: $h4; */
        }
        *:nth-child(3) {
            grid-area: subarea2;
            display: grid;
            align-self: start;
            place-content: center;
        }

        /* @include media(s2) {
            *:nth-child(3),
            *:nth-child(1) {
                text-align: right;
            }
        } */
        
    }
    .Grid_3 {
        display: grid;
        min-height: 50vh;
        gap: $h3;
        grid-template-areas: 
            "subarea0"
            "subarea1"
            "subarea2"
        ;
        @include media(s2) {
            grid-template-areas: 
                "subarea1 subarea0"
                "subarea2 subarea2"
            ;
            grid-template-columns: 1fr 1.618fr;
        }
        *:nth-child(1) {
            grid-area: subarea1;
            /* align-self: center; */

        }
        *:nth-child(2) {
            grid-area: subarea0;
            min-width: 50vw;
        }
        *:nth-child(3) {
            grid-area: subarea2;
            display: grid;
            place-content: center;
        }
    }
    .Grid_4 {
        display: grid;
        min-height: 50vh;
        margin-left: $h2;
        gap: $h3;
        grid-template-areas: 
            "subarea0"
            "subarea1"
            "subarea2"
        ;
        @include media(s2) {
            margin-left: $h3;
            grid-template-areas: 
                "subarea1 subarea0"
                "subarea2 subarea0"
            ;
        }
        *:nth-child(1) {
            grid-area: subarea1;
            align-self: end;
            /* margin-bottom: $h2; */
        }
        *:nth-child(2) {
            grid-area: subarea0;
            min-width: 50vw;
            /* margin-bottom: $h4; */
        }
        *:nth-child(3) {
            grid-area: subarea2;
            display: grid;
            align-self: start;
            place-content: center;
        }
    }
</style>