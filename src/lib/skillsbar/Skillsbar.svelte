<script>	
	import { skillLevels } from "$lib/data/skillLevels.js"
    import Skillbar from "$lib/skillsbar/Skillbar.svelte";
</script>

<section>
	<h2>Technical Skills</h2>
	{#each skillLevels as {skill, percent, color, delTime}}
		<Skillbar 	{skill} 
					{percent}
                	{color}
                	{delTime}/>
	{/each}
</section>