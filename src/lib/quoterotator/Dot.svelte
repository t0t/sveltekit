<script>
    export let quoteIndex;
    export let counter
    export let attribution;
    export let autoPlaying;
</script>

<span class="dot" class:active={quoteIndex===counter} class:not-clickable={autoPlaying} title={`quote by ${attribution}`} on:click></span>

<style lang="scss">
    @use "../../app.scss" as *;

    .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 5px;
        background-color: $grey_1;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.3s ease;
    }

    /* Add a background color to the active dot/circle */
    .active,
    .dot:hover {
        background-color: $highlight;
    }

    .not-clickable {
        pointer-events: none;
    }
</style>