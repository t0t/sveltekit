<script>	
	import { skillLevels } from "$lib/data/skillLevels.js"
    import Skillbar from "$lib/skillsbar/Skillbar.svelte";
</script>

<section>
	<h1>My Skills</h1>
	{#each skillLevels as {skill, percent, color, delTime}}
		<Skillbar {skill} 
                {percent}
                {color}
                {delTime}
                />
	{/each}
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap');
	
	* {
		box-sizing: border-box;
		font-family: Ubuntu
	}
	
	h1 {
		font-weight: 500;
	}
	
	section {
		width: 95%;
		margin: 20px;
	}
</style>