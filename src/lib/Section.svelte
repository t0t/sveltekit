<script>
    export let variante = 0;
    export let id = "";
    let modificador = [
        "Variante_0",
        "Variante_1",
        "Variante_2",
        "Variante_3"
    ];
</script>

<section    {id}
            class={modificador[variante]}
>
    <slot />
</section>

<style lang="scss">	
	@use "../app.scss" as *;

    section {
        padding: $h3;
        min-height: 50vh;
    }

    .Variante_0 {
        background-color: $grey_0;
    }

    .Variante_1 {
        background-color: $grey_0;
        padding: 0;
    }

    .Variante_2 {
        display: grid;
        place-content: center;
        background-color: $grey_5;
    }

    .Variante_3 {
        background-color: $grey_4;
        padding: 0;
    }
</style>