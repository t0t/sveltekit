<script>
	export let value = '';
	export let placeholder = '"...בראשית ברא אלהים"';
	const onInput = (e) => (value = e.target.value);
</script>

<style lang="scss">
	@use "../app.scss" as *;

	*:focus {
		outline: none;
	}
	input {
		@include type-setting(1);
		padding: $h1;
		border: none;
		background-color: $white;
		
		@include media(s3) {
			border-top-left-radius: $h2;
			border-bottom-left-radius: $h2;
		}

		&:focus-within {
			background-color: $highlight;
			color: $grey_5;

			&::placeholder {
				color: transparent;
			}
		}

		&::placeholder {
			color: $grey_4;
		}
	}
</style>

<input {value} {placeholder} type="" name="" on:input={onInput} />
