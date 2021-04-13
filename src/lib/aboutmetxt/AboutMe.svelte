<script>
    export let title = ""
    export let subtitle = ""
    export let text = ""
    export let textingles = ""
    export let img = ""
    let idioma_switch = true;
</script>

<style lang="scss">
	@use "../../app.scss" as *;

    .AboutMe {
        position: relative;
        display: grid;
        align-items: center;
        text-align: center;
        padding: $h3;
        
        .AboutMeHeader {
            max-width: $h9;
            margin-top: $h2;
            margin-bottom: $h2;
            margin-left: auto;
            margin-right: auto;
        }
        .AboutMeText {
            color: $grey_4;
        }
        
    }
    .Avatar {
        justify-self: center;
        max-width: $h6;
        height: $h6;
        border-radius: 50%;
    }
    .idioma_switch {
        position: relative;
        margin-bottom: $h1;
        display: flex;
        justify-items: flex-end;
        button:nth-child(1) {
            position: absolute;
            right: 0;
            top: 0;
            border: none;
            background-color: transparent;
            color: $quaternary;
            &:hover {
                color: $grey_2;
                cursor: pointer;
            }
        }
    }
    .timeline {
        text-align: left;
        color: $grey_5;
    }
</style>

<div class="AboutMe">

    <img class="Avatar" src={img} alt={title}>

    <h2 class="AboutMeHeader">
        {title} <br>
        <span class="AboutMeText">{@html subtitle}</span>
    </h2>

    <div class="idioma_switch">
        <button on:click={()=>{
            idioma_switch = !idioma_switch;
        }}>{#if idioma_switch}English{:else}Español{/if}</button>
    </div>

    <dl class="timeline">
    {#if idioma_switch}
        {@html text}
    {:else}
        {@html textingles}
    {/if}
    </dl>
</div>