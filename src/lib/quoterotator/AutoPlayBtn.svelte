<script>
	export let switchOn;
</script>

<div class="switch-cont" id="auto-play-cont">
	<!-- Rounded switch -->
	<label class="switch">
		<input type="checkbox" bind:checked={switchOn} on:change />
		<span class="slider round" />
	</label>
</div>

<style lang="scss">
	@use "../../app.scss" as *;
	$size: $h0;

	.switch-cont {
		position: relative;
		/* right: 0;
		top: 0; */

		&:hover:after {
			content: 'Auto-play';
			width: 60px;
			position: absolute;
			right: -$h3;
			top: -$h2;
			color: $grey_5;
			background-color: $secondary;
			text-align: center;
			border-radius: $h0;
			@include type-setting(-1);
		}
	}

	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: flex;
		width: $size;
		height: $size;
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
		background-color: red;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: $size;
		width: $size;
		left: 0;
		bottom: 0;
		background-color: $secondary;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: transparent;
		border: 1px dashed white;
	}

	input:focus + .slider {
		background-color: $grey_5;
	}

	input:checked + .slider:before {
		transform: translateX($size);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: $h1;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
