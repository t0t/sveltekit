<script>
    export let switchOn;
</script>

<div class="switch-cont" id="auto-play-cont">
    <!-- Rounded switch -->
    <label class="switch">
        <input type="checkbox" bind:checked={switchOn} on:change>
        <span class="slider round"></span>
    </label>
</div>

<style lang="scss">
    @use "../../app.scss"as *;

    .switch-cont {
        position: absolute;
        right: $h1;
        bottom: -$h0;

        &:hover:after {
            content: "Auto-play";
            width: $h4;
            position: absolute;
            right: $h2;
            top: -$h2;
            background-color: $white;
            /* padding: 5px 0; */
            border-radius: $h0;
            @include type-setting(-1);
        }
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: $h4;
        height: 35px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $grey_0;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: $h2;
        width: $h2;
        left: 4px;
        bottom: 4px;
        background-color: $highlight_1;
        transition: .4s;
    }

    input:checked+.slider {
        background-color: $highlight;
    }

    /* input:focus+.slider {
        box-shadow: 0 0 1px $grey_4;
    } */

    input:checked+.slider:before {
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: $h1;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>