<script>
	export let clases = '';
</script>

<pre class={clases}>
	<code>
		<slot />
	</code>
</pre>

<style lang="scss">	
	@use "../../app.scss" as *;
	pre,
	code {
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		font-size: 16px;
		line-height: 1.7;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		tab-size: 4;
		hyphens: none;
		font-weight: bold;
		overflow: auto;
	}
	pre {
		color: $grey_2;
		color: $secondary;
		padding: $h-1;
		background: $grey_4;
		border-radius: 0.3em;
	}
	pre > code {
		// color: $secondary;
		// background-color: $grey_0;
	}
	pre::selection,
	code::selection {
		text-shadow: none;
		background-color: $secondary;
}
</style>