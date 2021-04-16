<script>
	export let clases = '';
	export let id = '';
</script>

<section {id} class={clases}>
	<slot />
</section>

<!-- <style lang="scss">	
	@use "../app.scss" as *;
    section {
        @include media(s2){
            padding: $h3;
        }
    }
    .Section_0 {
        align-content: space-evenly;
        height: 100%;
        display: grid;
        color: inherit;
    }
    
    .Section_1 {
        padding: 0;
    }

    .Section_2 {
        color: inherit;
        display: grid;
        place-content: center;
    }
    
    .Section_3 {
        color: inherit;
        padding: 0;
    }
    .Section_4 {
        color: $grey_5;
        padding: $h3;
    }
    .Section_5 {
        padding: 0;
        min-height: 50vh;
        color: $grey_5;
        /* background-color: $white; */
    }
    .Section_6 {
        min-height: 50vh;
        color: $grey_0;
        /* background-color: red; */
    }
    
    .Section_7 { /* timeline */
        min-height: 50vh;
        color: $grey_2;
        padding: 0;
        @include media(s3) {
            margin-left: auto;
            margin-right: auto;
            max-width: $bp3;
        }
    }
    .Section_8 { /* cover */
        color: $grey_1;
        padding: 0;
    }
</style> -->
