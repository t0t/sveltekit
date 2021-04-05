<script>
  // import {fade} from 'svelte/transition';
  import GridBase from "$lib/GridBase.svelte";
  import Draggable from "./Draggable.svelte";
  import Form from "$lib/Form.svelte";
  import Input from "$lib/Input.svelte";
  import Button from "$lib/Button.svelte";

  let x = 0
  let y = 0;
  let new_items = [];
  let value = "";
  let base_unit = 1000
  let canvas = { width: base_unit, height: base_unit }
  let radio_peque = canvas.width/4;
  let radio_grande = canvas.width/2;
  let circles = [
    { id: "circulogrande", cx: radio_grande, cy: radio_grande, r: radio_grande },
    { id: "circuloizda", cx: radio_peque, cy: radio_grande, r: radio_peque },
    { id: "circulodcha", cx: radio_peque*3, cy: radio_grande, r: radio_peque }
  ]
  let items = [
    { id: 0, xpos: 0, ypos: 500 },
    { id: 1, xpos: 500, ypos: 500 },
    { id: 2, xpos: 750, ypos: 750 },
    { id: 3, xpos: 750, ypos: 250 },
    { id: 4, xpos: 1000, ypos: 500 }
  ]
  const addItem = () => {
    // Anade al array el texto del input 
    new_items = [...new_items, value]
  }

  let svg = null;
  const save = (svg, name = 'your-01234-map.svg') => {
		svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		let svgData = svg.outerHTML;
		let preface = '<?xml version="1.0" standalone="no"?>\r\n';
		let svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
		let svgUrl = URL.createObjectURL(svgBlob);
		let downloadLink = document.createElement("a");
		downloadLink.href = svgUrl;
		downloadLink.download = name;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
}
</script>

<style lang="scss">	
	@use "../../../app.scss" as *;

    text {
        fill: $black;
        font-family: $secondary_font;
        font-weight: bold;
    }
    circle {
        fill: none;
        stroke: $grey_1;
        stroke-width: 4;
    }
    hgroup, p {
      text-align: center;
    }
</style>

<GridBase variante={1}>
  <svg bind:this={svg} viewBox="-1 -1 {canvas.width} {canvas.height}">
    <g transform="translate(150,150) scale(0.7)" >
      {#each circles as circle}
      <circle cx={circle.cx} cy={circle.cy} r={circle.r} id={circle.id} fill="none" stroke="black"/>
      {/each}
      {#each items as item}
        <Draggable x={item.xpos} y={item.ypos}>{item.id}</Draggable>
      {/each}
      {#each new_items as new_i}
        <Draggable {x} {y}>{new_i}</Draggable>
      {/each}
    </g>
  </svg>

  <div slot="subarea1">
    <hgroup>
      <h2>Meta-Mapa +0+1234</h2>
      <p>Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.</p>
    </hgroup>
    <Form on:submit={addItem} variante={1}>
      <Input bind:value placeholder="Your word"/>
      <Button variante={6} text="Add" />
    </Form>
  </div>
  <div slot="subarea2">
    <Button on:click={() => save(svg)} variante={1} text="Download svg" />
  </div>
</GridBase>