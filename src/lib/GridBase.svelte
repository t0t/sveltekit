<script>
    export let variante = 0;
    const modificador = [
        "Grid_0",
        "Grid_1",
        "Grid_2",
        "Grid_3",
        "Grid_4",
        "Grid_5"
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
        }
        *:nth-child(2) {
            grid-area: subarea0;
            display: flex;
            min-width: 40vw;
            max-height: 50vh;
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
            display: flex;
            min-width: 40vw;
            max-height: 50vh;
        }
        *:nth-child(3) {
            grid-area: subarea2;
            display: grid;
            align-self: start;
            text-align: center;
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
            display: flex;
            min-width: 40vw;
            max-height: 50vh;
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
        gap: $h1;
        grid-template-areas: 
        "subarea0"
        "subarea1"
        "subarea2"
        ;
        padding-bottom: $h3;

        @include media(s2) {
            gap: $h3;
            padding-bottom: 0;
            grid-template-areas: 
                "subarea1 subarea0"
                "subarea2 subarea0"
            ;
        }
        *:nth-child(1) {
            grid-area: subarea1;
            align-self: end;
            padding-left: $h3;
            padding-top: $h2;

        }
        *:nth-child(2) {
            grid-area: subarea0;
            min-width: 50vw;
            background-color: $grey_4;
            /* margin-bottom: $h4; */
        }
        *:nth-child(3) {
            grid-area: subarea2;
            display: grid;
            align-self: start;
            place-content: center;
            padding-right: $h3;        padding-left: $h3;

        }
    }
    .Grid_5 {
        display: grid;
        min-height: 50vh;
        gap: $h2;
        padding-bottom: $h3;
        grid-template-areas: 
        "subarea0"
        "subarea2"
        "subarea1"
        ;
        @include media(s2) {
            padding-bottom: inherit;
            gap: $h3;
            grid-template-areas: 
                "subarea0 subarea2"
                "subarea0 subarea1"
            ;
            grid-template-rows: auto auto; /* Ajusta contenido a toda el área */
        }
        *:nth-child(1) {
            grid-area: subarea1;
            justify-self: center;
            background-color: pink;
                
            @include media(s2) {
                justify-self: start;
                align-self: start;
            }
        }
        *:nth-child(2) {
            grid-area: subarea0;
            min-width: 50vw;
            align-self: end;
        }
        *:nth-child(3) {
            grid-area: subarea2;
            display: grid;
            margin-left: $h3;
            margin-right: $h3;
            padding-bottom: $h2;
            text-align: center;
            
            @include media(s2) {
                text-align: inherit;
                padding-bottom: 0;
                margin-left: 0;
                align-self: end;
            }
        }
    }
</style>