<script>
	export let tipo = 0;
	export let variante = 0;
	const modificador = ['Grid_0', 'Grid_1', 'Grid_2', 'Grid_3', 'Grid_4', 'Grid_5', 'Grid_6', 'Grid_7'];
	// $: innerWidth = 0
</script>

<!-- <svelte:window bind:innerWidth /> -->

{#if tipo === 0}
	<div class={modificador[variante]}>
		<div><slot name="subarea1" /></div>
		<div><slot /></div>
		<div><slot name="subarea2" /></div>
	</div>
{:else if tipo === 1}
	<div class={modificador[variante]}>
		<div class="subarea a">
			<slot />
		</div>
		<div class="subarea b">
			<slot name="subarea1" />
		</div>
		<div class="subarea c">
			<slot name="subarea2" />
		</div>
		<div class="subarea d">
			<slot name="subarea3" />
		</div>
		<div class="subarea e">
			<slot name="subarea4" />
		</div>
		<div class="subarea f">
			<slot name="subarea5" />
		</div>
		<div class="subarea g">
			<slot name="subarea6" />
		</div>
	</div>

{:else if tipo === 2}
	<div class={modificador[variante]}>
		<div class="a1"> <slot name="a1" /> </div>
		<div class="a3"> <slot name="a3" /> </div>
		<div class="a4"> <slot name="a4" /> </div>
		<div class="a2"> <slot name="a2" /> </div>
		<div class="a5"> <slot name="a5" /> </div>
		<div class="a6"> <slot name="a6" /> </div>
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
            max-height: 70vh;
            margin-top: -$h4;
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
    
    .Grid_3 { /* Grid base para Listas de Articulos */
        display: grid;
        min-height: 50vh;
        gap: $h3;
        grid-template-areas: 
            "subarea0"
            "subarea1"
            "subarea2"
        ;
        padding-top: $h3;
        padding-left: $h3;
        padding-right: $h3;

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
            min-width: 38vw;
            align-self: center;
        }
        *:nth-child(3) {
            positin: relative;

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
        max-height: 100vh;
        max-width: 100vw;
        
        @include media(s2) {
            height: $width / 1.618;
            display: grid;
            
            grid-template-columns: 61.8% 9.02% 5.58% 23.6%;
            grid-template-rows: 61.8% 9.02% 5.58% 23.6%;
            grid-template-areas: 
                "A B B B"
                "A E F C"
                "A E G C"
                "A D D C";  
        }
        .subarea {
            &.a {
                /* padding-top: $h3;
                padding-bottom: $h3; */
                z-index: 1;
            }
            &.b {
                // background-color: red;
                // padding-top: $h3;
                // padding-bottom: ;
            }
        }
        @include media(s2) {        
            .subarea {
                &.a {
                    // display: flex;
                    // justify-content: center;
                    // align-items: center;
                    grid-area: A;
                    // overflow:hidden;
                    // background-size: cover;
                    // background-repeat: no-repeat;
                    z-index: 0;
                }
                &.b {
                    grid-area: B;
                }
                &.c {
                    grid-area: C;
                    border-top: 0.5px solid $border_color;
                    border-left: 0.5px solid $border_color;
                }
                &.d {
                    grid-area: D;
                    border-left: 0.5px solid $border_color;
                    border-top: 0.5px solid $border_color;
                }
                &.e {
                    grid-area: E;
                    @include type-setting(-1);
                    border-top: 0.5px solid $border_color;
                    border-left: 0.5px solid $border_color;
                }
                &.f {
                    grid-area: F;
                    @include type-setting(-1);
                    border-top: 0.5px solid $border_color;
                    border-left: 0.5px solid $border_color;

                }
                &.g {
                    grid-area: G;
                    @include type-setting(-1);
                    border-top: 0.5px solid $border_color;
                    border-left: 0.5px solid $border_color;
                }
            }
        }
    }
    
    .Grid_7 {
        $gap: 1px;
        $the_rows: 13;
        $the_columns: 8;
        
        @include media(s1) {
            display: grid;  
            grid-template-columns: repeat($the_columns, 1fr);
            grid-template-rows: repeat($the_rows, 1fr);
            // grid-gap: $gap;
            height: 100vh;

            .a1 {
                grid-column-start:6;
                grid-column-end: 9;
                grid-row-start: 1;
                grid-row-end: 4;
                background-color: $grey_5;
            }
            .a3 {
                grid-column-start: 1;
                grid-column-end: 9;
                grid-row-start: 6;
                grid-row-end: 14;
                background-color: $grey_5;
            }
            .a4 {
                grid-column-start: 1;
                grid-column-end: 6;
                grid-row-start: 1;
                grid-row-end: 6;
                background-color: $grey_5;
                overflow: hidden;
            }
            .a2 {
                grid-column-start: 7;
                grid-column-end: 9;
                grid-row-start: 4;
                grid-row-end: 6;
                background-color: $grey_5;
                overflow: hidden;
            }
            .a5 {
                grid-column-start: 6;
                grid-column-end: 7;
                grid-row-start: 4;
                grid-row-end: 5;
                background-color: $grey_5;
            }
            .a6 {
                grid-column-start: 6;
                grid-column-end: 7;
                grid-row-start: 5;
                grid-row-end: 6;
                background-color: $grey_5;
            }
        }
    }
</style>
