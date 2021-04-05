<script>
	export let haserror = false;
</script>

<style lang="scss">
	@use "../app.scss" as *;

	.Alert {
		color: $white;
		padding: $h1;
		display: none;
		position: relative;
	}
	.haserror {
		margin-top: $h1;
		display: block;
		border-top-width: 2px;
		border-bottom-width: 2px;
		border-top-style: dashed;
		border-top-style: dashed;
		border-bottom-style: dashed;
		border-top-color: $grey_3;
		border-bottom-color: $grey_3;
		animation-name: show_error;
		animation-duration: 0.3s;
		animation-fill-mode: backwards;
		animation-iteration-count: 1;
	}
	@keyframes show_error {
		0% {
			transform: translateY(0px);
			opacity: 0;
		}
		50% {
			transform: translateY(10px);
			opacity: 1;
		}
	}
</style>


<div class="Alert" class:haserror={!haserror}>
	<slot />
</div>
