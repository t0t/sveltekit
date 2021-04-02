<script>
    export let switchOn;
</script>

<section id="auto-play-cont">
    <!-- Rounded switch -->
    <label class="switch">
        <input type="checkbox" bind:checked={switchOn} on:change>
        <span class="slider round"></span>
    </label>
</section>

<style lang="scss">
    @use "../../app.scss"as *;

    section {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    section:hover:after {
        content: "Auto-play";
        width: 100px;
        position: absolute;
        left: 0;
        bottom: -30px;
        background-color: $white;
        box-shadow: 0 0 3px $black;
        padding: 5px 0;
        border-radius: 5px;
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
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
        background-color: $grey_2;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: $white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked+.slider {
        background-color: hsl(207, 46%, 46%);
    }

    input:focus+.slider {
        box-shadow: 0 0 1px $grey_4;
    }

    input:checked+.slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>