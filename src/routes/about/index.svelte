<script>
    import Skillbar from "$lib/Skillbar.svelte";
    import { skillLevels } from "$lib/data/skillLevels.js"
</script>

<h1>About page</h1>

<section>
	<h1>My Skills</h1>
	{#each skillLevels as {skill, percent, color, delTime}}
		<Skillbar   {skill} 
                    {percent}
                    {color}
                    {delTime}
        />
	{/each}
</section>