<script>
    import Section from "$lib/Section.svelte"
    import Header from "$lib/Header.svelte"
    import Button from "$lib/Button.svelte"
    // import Blockquote from "$lib/Blockquote.svelte"
    // import Code from "$lib/Code/Code.svelte"
    // import List from "$lib/List/List.svelte"
    // import ListItem from "$lib/List/ListItem.svelte"
</script>

<Section id="Html" clases="c_4 bgc_0 dg_12 rg_1 bgwhite pl_3 pr_3 pb_3 cg_s2_1">

    <Header tipo={1} clases="col_12 tac c_4" title="Buttons" />
    <div class="col_12 dg_12 gap_1">
        <Button clases="col_6" url="#" target="_blank" variante={0} text="Default button Tipo external link" />
        <Button clases="col_6" variante={1} text="Simple Button variante 1" />
        <Button clases="col_6" variante={2} text="Simple Button variante 2" />
        <Button clases="col_6" variante={3} text="Simple Button variante 3" />
        <Button clases="col_6" variante={4} text="Botón variante 4" />
        <Button clases="col_6" variante={5} text="Big Button" />
        <Button clases="col_6" variante={6} text="Botón variante 6" />
        <Button clases="col_6" variante={7} text="Botón variante 7" />
        <Button clases="col_6" variante={8} text="Botón variante 8" />
        <Button clases="col_6" variante={999} text="Btn not clicable if input value is empty" />
        <Button clases="col_6" is_submit={true} variante={999} text="Button tipo submit" />
    </div>
</Section>