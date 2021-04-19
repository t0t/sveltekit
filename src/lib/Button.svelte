<script>
	export let text = '';
	export let url = '';
	export let is_submit = false;
	export let target = false;
	export let variante = 0;
	export let clases = "";
	export let valorinput = 'input';
	let modificador = [
		'Button_0',
		'Button_1',
		'Button_2',
		'Button_3',
		'Button_4',
		'Button_5',
		'Button_6',
		'Button_7',
		'Button_8'
	];
</script>

{#if target}
	<a class="button {modificador[variante]} {clases}" href={url} {target}>
		{text}
	</a>
{:else if !target && url}
	<a class="button {modificador[variante]} {clases}" href={url}>
		{text}
	</a>
{:else if is_submit}
	<button on:click type="submit" class="{modificador[variante]} {clases}">
		{text}
	</button>
{:else}
	<button on:click class="{modificador[variante]} {clases}" class:not-clickable={valorinput == ''}>
		{text}
	</button>
{/if}

<style lang="scss">
	@use "../app.scss" as *;

	:global(button),
	.button {
		background-color: transparent;
		font-size: inherit;
		text-align: center;
		text-decoration: none;
		border: none;
		width: 100%;

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
		padding: $h2;
		color: $grey_4;
		border-color: $grey_1;
		margin: 0;
		&:hover {
			color: $grey_5;
			background-color: $grey_1;
			border-color: $grey_1;
		}
		&:focus {
			background-color: #fff;
		}
	}
	.Button_1 {
		color: $grey_5;
		width: 100%;
	}
	.Button_2 {
		color: $grey_1;
		margin-bottom: 0;
		margin-top: 0;
	}
	.Button_3 {
		color: inherit;
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
		padding-left: $h2;
		padding-right: $h2;
		@include type-setting(0);
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
		place-self: center;
		width: fit-content;

		&:hover {
			color: $grey_0;
			background-color: $black;
		}
	}
	.Button_8 {
		padding: $h2;
		color: $grey_1;
		margin: 0;
		&:hover {
			color: $grey_5;
			background-color: $grey_1;
		}
		&:focus {
			background-color: #fff;
		}
	}
</style>
