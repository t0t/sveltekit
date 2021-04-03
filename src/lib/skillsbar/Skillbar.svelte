<script>
	// https://svelte.dev/docs#tweened
	import {
		tweened
	} from 'svelte/motion';
	// https://svelte.dev/docs#svelte_easing
	import {
		backInOut
	} from 'svelte/easing';

	export let skill;
	export let percent;
	export let color;
	export let delTime;

	const progress = tweened(30, {
		delay: delTime,
		duration: 2000,
		easing: backInOut
	});

	// Changes the initial value of 30 to percent value in skillLevels array
	progress.set(percent)
</script>

<div class="container">
	<span class="skill">{skill}</span>
	<div class="skills" style="width: {$progress}%; background-color: {color}">
		{percent}%
	</div>
</div>


<style lang="scss">
	@use "../../app.scss"as *;

	.container {
		width: 100%;
		/* background-color: $grey_2; */
		margin-top: $h0;
		position: relative;
	}

	span {
		position: absolute;
		top: 32%;
		left: 8px;
		color: $white;
	}

	.skills {
		text-align: right;
		padding: $h0 $h0 $h0 0;
		/* font-weight: 300; */
		color: $white;
		transition: .5s ease-out;
	}
</style>