<script>
    export let text = "";
    export let url = "";
    export let is_submit = false;
    export let target = false;
    export let variante = 0;
    export let valorinput = "input";

    $: modificador = [
        "Button_0",
        "Button_1",
        "Button_2",
        "Button_3",
        "Button_4",
        "Button_5",
        "Button_6",
        "Button_7"
    ];
</script>

<style lang="scss">
    @use "../app.scss" as *;

    :global(button),
    .button {
        background-color: transparent;
        /* user-select: none; */
        padding: $button_2;
        font-size: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-decoration: none;
        border-width: 1px;
        border-style: dotted;
        position: relative;

        &:focus {
            border: none;
        }
        &:after {
            font-size: $h2;
            padding-left: $h0;
        }
        &:hover {
            cursor: pointer;
        }
    }
    
    .Button_0 {
        color: $grey_1;
        border-color: $grey_1;
        margin: 0;
        &:hover {
            color: $grey_5;
            background-color: $grey_1;
            border-color: $grey_1;
        }
    }
    .Button_1 {
        color: $grey_5;
        border-color: $grey_5;
        &:hover a {
            color: $grey_0;
            background-color: $quaternary;
            border-color: $quaternary;
        }
    }
    .Button_2 {
        color: $grey_1;
        border-color: $grey_2;
        margin-bottom: 0;
        margin-top: 0;

        &:hover {
            color: $grey_5;
            background-color: $grey_0;
            border-color: $grey_0;
        }
    }
    .Button_3 {
        color: $grey_1;
        border-color: $grey_1;
        &:hover {
            color: $grey_5;
            background-color: $grey_0;
            border-color: $grey_0;
        }
    }
    .Button_4 {
        color: $grey_3;
        border: 1px double $grey_5;
        margin: 0;
        /* padding: $button_4; */
        background-color: $highlight_2;
        @include type-setting(0);
        border-radius: 50%;
        width: $h6;
        height: $h6;
        /* align-self: center; */
        
        @include media(s2) {
            @include type-setting(1);
            width: $h7;
            height: $h7;
        }
        &:hover {
            color: $highlight_2;
            background-color: $grey_4;
        }
    }
    .Button_5 {
        color: $black;
        border: none;
        text-align: center;
        margin: 0;

        @include type-setting(2);
        display: block;
        background-color: transparent;
        &:hover {
            color: $grey_0;
        }
    }
    .Button_6 {
        display: block;
        border: none;
        text-align: center;
        margin: 0;
        @include type-setting(1);
        color: $grey_1;
        background-color: $grey_4;
        width: 100%;
        
        @include media(s3) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: $h2;
            border-bottom-right-radius: $h2;
		}
        
        &:hover {
            background-color: $highlight_2;
            color: $grey_5;
        }
    }
    .Button_7 {
        color: $grey_1;
        background-color: $grey_4;
        border: none;
        padding: $button_3;

        &:hover {
            color: $grey_0;
            background-color: $black;
        }
    }
</style>

{#if target}
    <a 
        class="button {modificador[variante]}"
        href="{url}" 
        target="{target}">
        {text}
    </a>
{:else if !target && url}
    <a 
        class="button {modificador[variante]}"
        href="{url}">
        {text}
    </a>
{:else if is_submit}
    <button on:click type="submit" 
            class="{modificador[variante]}">
        {text}
    </button>
{:else}
    <button on:click 
            class="{modificador[variante]}"
            class:not-clickable={valorinput==""}>
        {text}
    </button>
{/if}
