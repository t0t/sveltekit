<script>
    export let tipo = 0
    export let variante = 0;
    const modificador = [
        "Grid_0",
        "Grid_1",
        "Grid_2",
        "Grid_3",
        "Grid_4",
        "Grid_5",
        "Grid_6"
    ];
</script>

{#if tipo === 0}

    <div class={modificador[variante]}>
        <div><slot name="subarea1"></slot></div>
        <div><slot></slot></div>
        <div><slot name="subarea2"></slot></div>
    </div>

{:else if tipo === 1}

    <div class={modificador[variante]}>
        <div class="item a">
            <slot/>
        </div>
        <div class="item b">
            <slot name="subarea1"/> B
        </div>
        <div class="item c">
            <slot name="subarea2"/>
            C
        </div>
        <div class="item d">
            <slot name="subarea3"/>
            D
        </div>
        <div class="item e">
            <slot name="subarea4"/>
            E
        </div>
        <div class="item f">
            <slot name="subarea5"/>
            F
        </div>
        <div class="item g">
            <slot name="subarea6"/>
            G
        </div>
    </div>

{:else}
     "define un tipo de layout"
{/if}

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
            grid-row-gap: $h2;
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
            grid-row-gap: $h2;
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
            grid-row-gap: $h2;
            grid-template-areas: 
                "subarea0 subarea1"
                "subarea0 subarea2"
            ;
            grid-template-rows: auto auto;
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
            @include media(s2) {
                place-content: start;
            }
        }        
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
            grid-row-gap: $h2;
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
            @include media(s2) {
                justify-self: start;
                align-self: start;
            }
        }
        *:nth-child(2) {
            grid-area: subarea0;
            min-width: 50vw;
            align-self: center;
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

    .Grid_6 {
        $width: 100vw;
        width: $width;
        height: $width / 1.618;
        max-height: 100vh;
        max-width: 100vw;
        border: 0.5 solid black;
        display: grid;
        
        grid-template-columns: 61.8% 9.02% 5.58% 23.6%;
        grid-template-rows: 61.8% 9.02% 5.58% 23.6%;
        grid-template-areas: 
            "A B B B"
            "A E F C"
            "A E G C"
            "A D D C";  
        }

        .item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            
            color: #F2F2F2;
            font-size: 1.5em;
            font-weight: 700;
            text-shadow: 1px 1px 1px #878787;
            box-sizing: border-box;
        
            &.a {
                grid-area: A;
                background-color: $grey_5;
            }
            &.b {
                grid-area: B;
                background-color: $grey_4;
            }
            &.c {
                grid-area: C;
                background-color: $grey_3;
            }
            &.d {
                grid-area: D;
                background-color: $grey_2;
            }
            &.e {
                grid-area: E;
                font-size: 1.2em;
                background-color: $grey_1;
            }
            &.f {
                grid-area: F;
                font-size: 1em;
                background-color: $grey_0;
            }
            &.g {
                grid-area: G;
                font-size: 0.7em;
                background-color: $grey_5;
            }
    }
</style>