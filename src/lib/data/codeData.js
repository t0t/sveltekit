export const codeData = [
    {
        language: "scss",
        text: `
// _variables.scss
$h2: 1.618rem; $h1: 1rem; $h0: 0.618rem; $h-1: 0.382rem;
// _fonts.scss
$size-scales: ( -2: $h-1, -1: $h0, 0: $h1, 1: $h2 );

@function font-scale( $level ) {
    @return map-get( $size-scales, $level );
}

@mixin type-setting( $level: 0 ) {
    font-size: font-scale( $level );
}
// index.svelte
h1 {
    @include type-setting(1);
}
`
    },
    {
        language: "javascript",
        text: 
`
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
        language: "markup",
        text: 
`
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
]