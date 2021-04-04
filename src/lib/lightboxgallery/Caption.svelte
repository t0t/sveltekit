<script>
	import { createEventDispatcher } from 'svelte';
  export let caption;
	
	const dispatch = createEventDispatcher();
</script>

<style lang="scss">
	@use "../../app.scss"as *;
/* Container for image text */
.caption-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
  text-align: center;
  /* background-color: $grey_1; */
  padding: 0 $h1;
  color: $grey_5;
  margin-bottom: $h1;
}
	
/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
/*   position: absolute;
  top: 50%; */
  width: auto;
  padding: $h1;
  margin-top: 0px;
  color: $grey_3;
  font-weight: bold;
  @include type-setting(1);
  border-radius: 0 3px 3px 0;
  user-select: none;
  text-decoration: none;
}

/* Position the "next button" to the right */
.next {
/*   right: 15vw; */
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  color: $black;
	text-decoration: none;
}	
	
.prev:active,
.next:active {
  color: hsla(125, 86%, 64%, 1);
	text-decoration: none;
}		
	p {
    margin-bottom: 0;
  }
</style>


<div class="caption-container">
	<!-- Previous Arrow -->
	<a href="#arrowL" class="arrow prev" on:click={() => dispatch('prevClick')}>&#10094;</a>
		<!-- Caption -->
	<p id="caption">{caption}</p>
		<!-- Next Arrow -->
	<a href="#arrowR" class="arrow next" on:click={() => dispatch('nextClick')}>&#10095;</a>
</div>