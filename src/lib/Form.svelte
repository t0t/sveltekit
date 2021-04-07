<script>
    export let name = "My form group";
    export let variante = 0;
    const modificador = [
        "Form_0",
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

    .Form_0 {
        display: flex;
        flex-direction: row;
    }

    .Form_1 {
        @include media(s2) {
            margin-inline: auto;
            display: grid;
            grid-template-areas: "input button";
        }

        &:nth-child(1){
            grid-area: input;
        }
        &:nth-child(2){
            grid-area: button;
            @include media(s3) {
                width: fit-content;
            }
        }
    }
</style>