<script>
    import Header from "$lib/Header.svelte"
    import Button from "$lib/Button.svelte"
    import Blockquote from "$lib/Blockquote.svelte"
    // import Code from "$lib/Code/Code.svelte"
    import Section from "$lib/Section.svelte"
    import List from "$lib/List/List.svelte"
    import ListItem from "$lib/List/ListItem.svelte"
</script>

<Section id="Html" clases="c_4 bgc_0 dg_12 rg_1 bgwhite pl_3 pr_3 pb_3 cg_s2_1">
	<Header tipo={1} clases="col_12 tac c_4" title="Basic Html" />
	<div class="col_12 dg_0 ">
		<div class="dg_0 gap_1">
			<h1>Heading h1</h1>
			<h2>Heading h2</h2>
			<h3>Heading h3</h3>
			<h4>Heading h4</h4>
			<Blockquote variante={0} text="This is a Default Blockquote text" />
			<Blockquote variante={1} text="This is a Blockquote text Variante 1" />
			
			<p>Lorem ipsum dolor sit <i>italic text</i> adipisicing elit. Ipsam impedit distinctio recusandae similique necessitatibus quia <strong>(strong text)</strong> sed provident nihil iste dignissimos harum laboriosam nulla, iusto, totam delectus aperiam pariatur ex?.
			Lorem ipsum dolor sit amet, consectetur <u>adipisicing</u> elit. Veritatis, esse! Ipsa iusto autem dolores fugit modi soluta ut a debitis <a href="#">inline link</a> laboriosam qui, saepe sint, pariatur quos eaque?
			</p>
		</div>
	</div>
</Section>