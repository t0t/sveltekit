<script>
    export let pages = [];
    // export let current_page;
    const setCurrentPage = (e) => {
        current_page = e.srcElement.firstChild.data
        console.log(current_page)
    }
    console.log("ss",current_page)
</script>

<nav>
    {#each pages as page}
        <a href="{page.url}"
        on:click={setCurrentPage}
        >{page.name}</a>
    {/each}
</nav>

<style lang="scss">
    nav {
        padding: 30px;
        text-align: center;
        a {
            &:hover {
                color: black;
            }    
        }
    }
</style>