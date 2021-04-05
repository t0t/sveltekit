<script>
    export let variante = 0;
    export let id = "";
    let modificador = [
        "Section_0",
        "Section_1",
        "Section_2",
        "Section_3"
    ];
</script>

<section    {id}
            class={modificador[variante]}
>
    <slot />
</section>

<style lang="scss">	
	@use "../app.scss" as *;
    
    .Section_0 {
        padding: $h3;
        min-height: 50vh;
        color: $grey_5;
        background-color: $grey_0;
    }
    
    .Section_1 {
        padding: $h3;
        min-height: 50vh;
        background-color: $grey_3;
    }

    .Section_2 {
        display: grid;
        place-content: center;
        color: $grey_0;
        background-color: $grey_4;
    }
    
    .Section_3 {
        color: $black;
        background-color: $grey_1;
        padding: 0;
    }
</style>