export const codeData = [
	{
		language: 'scss',
		text: `
// Gaps horizontales
// .cg_2 {
//     column-gap: 2.618rem;
// }
@for $i from 1 through 5 {
    .cg_#{$i} {
        column-gap: sizes($i);
    }
}
@include media(s2) {
    @for $i from 1 through 5 {
        .cg_s2_#{$i} {
            column-gap: sizes($i);
        }
    }
}
`
	},
	{
		language: 'javascript',
		text: `
// Componente hijo
<script>
    export let tipo = 0; export let variante = 0;
    const modificador = [ "Header_0", "Header_1", "..." ]
</script>
<style>
    .Header_0 { background-color: $grey_2; }
</style>
{#if tipo === 0}
    <h1 class={modificador[variante]}><slot /></h1>
{/if}

// Componente padre
<script> import Header from '$lib/Header.svelte'; </script>
<Header tipo={0} variante={1}
        title={coverData[4].title}
        subtitle={coverData[4].subtitle} />
`
	},
	{
		language: 'markup',
		text: `
<!-- Con la orden 'git push' nuestro prototipo
viaja mágicamente por la red hasta su repositorio 
y también se despliega en producción. -->
> git push

<!-- Hot reloading, preprocesado, todo lo que
un entorno moderno de desarrollo necesita -->
> npm i
> npm run dev
> npm run build
`
	}
];
