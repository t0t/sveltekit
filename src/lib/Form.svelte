<script>
    export let name = "My form group";
    export let variante = 0;
    const modificador = [
        "Variante_0",
        "Form_1"
    ]
</script>

<form 
    {name} 
    on:submit|preventDefault
    class={modificador[variante]}
>
    <slot />
</form>

<style lang="scss">
	@use "../app.scss" as *;

    .Variante_0 {
        display: flex;
        flex-direction: row;
    }

    .Form_1 {
        margin-inline: auto;

        @include media(s3) {
            display: grid;
            grid-template-areas: "input button";
        }

        &:nth-child(1){
            grid-area: input;
        }
        &:nth-child(2){
            grid-area: button;
            width: fit-content;
        }
    }
</style>