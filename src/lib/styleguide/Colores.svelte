<script>
    import Header from "$lib/Header.svelte"
    import Section from "$lib/Section.svelte"
    import Code from "$lib/Code/Code.svelte"
    import List from "$lib/List/List.svelte"
    import ListItem from "$lib/List/ListItem.svelte"
</script>

<Section id="Colores" clases="c_4 bgc_0 dg_12 rg_1 bgwhite pl_3 pr_3 pb_3 cg_s2_1">

<Header tipo={4} clases="col_12 tac c_4" title="Colores" />

	<List tipo={1} clases="col_12 dg_12 c_1">
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_white pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_white"> $white </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_0 pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_0"> $grey_0 </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_1 pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_1"> $grey_1 </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_2 pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_1"> $grey_2 </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_3 pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_1"> $grey_3 </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_4 pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_1"> $grey_4 </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_5 pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_1"> $grey_5 </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_black pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_1"> $black </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_primary pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_primary"> $primary </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_secondary pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_seconday"> $seconday </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_tertiary pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_tertiary"> $tertiary </Code>
		</ListItem>
		<ListItem tipo={4} 
			clases="col_6 col_s2_3 dg_0 rg_-1 bgc_quaternary pt_3 pr_1 pl_1 pb_1">
			<Code clases="c_quaternary"> $quaternary </Code>
		</ListItem>
	</List>
</Section>