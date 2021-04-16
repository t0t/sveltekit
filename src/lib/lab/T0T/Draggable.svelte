<script>
	import { fade } from 'svelte/transition';
	export let x = 0;
	export let y = 0;
	let moving = false;

	const start = () => {
		moving = true;
	};
	function stop() {
		moving = false;
	}

	function move(e) {
		if (moving) {
			x += e.movementX * 2.5;
			y += e.movementY * 2.5;
		}
	}
</script>

<svelte:window on:mouseup={stop} />
<text {x} {y} font-size="55" on:mousedown={start} on:mousemove={move} class="draggable">
	{#if moving}
		<div transition:fade>xxx</div>
	{/if}
	<slot />
</text>

<style lang="scss">
	@use "../../../app.scss" as *;

	.draggable {
		user-select: none;
		cursor: move;
		z-index: 1000;
		@include type-setting(3);
	}
</style>
