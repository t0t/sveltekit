<script>
    export let variante = 0;
    const modificador = [
        "Grid_0",
        "Grid_1"
    ];
</script>

<div class={modificador[variante]}>
    <slot/>
</div>

<style lang="scss">
	@use "../app.scss" as *;

    .Grid_0 {
        @include media(s2) {
            display: grid;
            /* justify-content: center; */
            grid-template-areas: 
                "el1 el2"
                "el1 el3"
            ;
            grid-template-columns: 1fr 0.1fr 0.1fr;
            background-color: yellow;
            width: 100%;
        }

        &:nth-child(1) {
            grid-area: el1;
            width: 100%;
            height: auto;
        }
        &:nth-child(2) {
            grid-area: el2;

            /* width: 100px; */
        }
        &:nth-child(3) {
            grid-area: el3;
            /* width: 50px; */
            background-color: red;
        }
    }
    .Grid_1 {
    }
</style>