<script>
    export let variante = 0;
    const modificador = [
        "Svg_0",
        "Svg_1"
    ];
</script>

<svg 
    class={modificador[variante]}
    stroke-miterlimit="1" 
    viewBox="0 0 4320 4854">
    <slot />
</svg>

<style lang="scss">
	@use "../app.scss" as *;

    .Svg_0 {
        fill: none;
        stroke: black;
        .text {
            fill: red;
            stroke: none;
        }
        .path {
            stroke: $grey_5;
        }
        .circle {
            stroke: red;
        }
        path,
        circle {
            fill: none;
        }

    }
    .Svg_1 {
        fill: blue;
    }
</style>