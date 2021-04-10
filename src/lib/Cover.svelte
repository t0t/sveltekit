<script>
    import Button from '$lib/Button.svelte';
    import GridBase from '$lib/GridBase.svelte';
    import Section from '$lib/Section.svelte';
    import Header from '$lib/Header.svelte';
    import List from '$lib/List/List.svelte';
    import ListItem from '$lib/List/ListItem.svelte';
</script>

<section>
    <div class="a" style="background-image:url('./img/bg1.jpg');">
        <Header tipo={2}
        variante={6}
        title="Sergio Forés"
        subtitle="Hermenéutica Holística"/>
    </div>
    <div class="b">

    </div>
</section>

<style lang="scss">	
	@use "../app.scss" as *;

    section {
        display: grid;
        grid-template-areas: 
            "a"
            "b"
        ;
        grid-template-columns: auto auto;
        place-items: center;
        @include media(s2) {
            grid-template-areas: "a b";
        }

        .a,
        .b {
            border-radius: 50%;
            width: 100vw;
            height: 100vw;
            @include media(s2) {
                width: 50vw;
                height: 50vw;
                max-height: 100vh;
            }
        }
        .a {
            grid-area: a;
            background-position: center;
            background-size: cover;
            display: grid;
            place-items: center;
            background-repeat: no-repeat;
        }
        .b {
            grid-area: b;
            background-color: $grey_2;
            display: grid;
            grid-template-areas: "c d";
            grid-template-columns: 1fr 1fr;
            place-items: center;
            place-content: center;
        }
        .c,
        .d {
                border-radius: 50%;
                place-content: center;
                width: 38vh;
                height: 38vh;
                display: grid;
                text-align: center;
        }
        .c {
            grid-area: c;
            background-color: red;
        }
        .d {
            grid-area: d;
            background-color: blue;
        }
    }

    .Cover_0 {
        display: grid;
        place-content: center;
        min-height: 50vh;
        color: $grey_5;
        background-color: $grey_1;
        
        @include media(s2) {
            min-height: 100vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
</style>