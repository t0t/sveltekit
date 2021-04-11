<script>
	let pos = 0;
	const contentData = [
		{
			id: 0,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti atque iure, officia iste voluptates dolor, aperiam quaerat natus blanditiis totam debitis nesciunt a rem dolore est porro veritatis nostrum.',
			img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Opus_mago-cabalisticum_et_theologicum_-_vom_Uhrsprung_und_Erzeugung_des_Saltzes%2C_dessen_Natur_und_Eigenschafft%2C_wie_auch_dessen_Nutz_und_Gebrauch_%281719%29_%2814756118486%29.jpg'
		},
		{
			id: 1,
			text: 'Enim deleniti atque iure, officia iste voluptates dolor, aperiam quaerat natus blanditiis totam debitis nesciunt a rem dolore est porro veritatis nostrum.',
			img: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Opus_mago-cabalisticum_et_theologicum_-_vom_Uhrsprung_und_Erzeugung_des_Saltzes%2C_dessen_Natur_und_Eigenschafft%2C_wie_auch_dessen_Nutz_und_Gebrauch_%281719%29_%2814592412220%29.jpg'
		},
		{
			id: 2,
			text: 'Aperiam quaerat natus blanditiis totam debitis nesciunt a rem dolore est porro veritatis nostrum.',
			img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Opus_mago-cabalisticum_et_theologicum_-_vom_Uhrsprung_und_Erzeugung_des_Saltzes%2C_dessen_Natur_und_Eigenschafft%2C_wie_auch_dessen_Nutz_und_Gebrauch_%281719%29_%2814779145205%29.jpg'
		},
		{
			id: 3,
			text: 'Aperiam quaerat natus blanditiis totam debitis nesciunt a rem dolore est porro veritatis nostrum.',
			img: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Spiegel_detail.jpg'
		},
		{
			id: 4,
			text: 'lore kajdfn akjdfn',
			img: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Begin_der_verheffing_Anfang_Exaltation_%28titel_op_object%29%2C_RP-P-1961-333.jpg'
		},
		{
			id: 5,
			text: 'oj añosidjf ñasdfj ñasdkfj ñakj',
			img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/GOD_72_NAMES.png'
		},
		{
			id: 6,
			text: 'asdfdkfj ñakj',
			img: 'https://upload.wikimedia.org/wikipedia/commons/0/00/AGLA.jpg'
		}
	];
    const nextSlide = () => {
		if (pos < (contentData.length - 1) * 100) {
			pos += 100;
		} else {
			pos = 0;
		}
	};
	const prevSlide = () => (pos -= 100);
</script>


<style>
	.slider {
		position: relative;
		overflow: hidden;
	}

	.slides {
		display: grid;
		grid-auto-flow: column;
		transition: transform .3s ease;
		width: 100vw;
	}

	.slides > .slide {
		width: 100vw;
		min-height: 50vh;
		background-size: cover;
	}

	.slide-content {
		background-color: rgba(255,255,255,0.9);
		padding-top: 10px;
		padding-left: 30px;
		padding-right: 30px;
		padding-bottom: 30px;
	}
	.next,
	.prev {
		position: absolute;
		bottom: 0;
		width: 50px;
		height: 50px;
		display: grid;
		place-content: center;
		box-sizing: border-box;
		border: none;
		border-radius: 50%;
	}
	.next:hover,
	.prev:hover {
		color: white;
		background-color: black;
		cursor: pointer;
	}
	
	.next {
		right: 0;
	}

	.prev {
		right: 50px;
	}
	
	p {
		line-height: 1.62;
	}
</style>

<div class="slider">
	<div class="slides" style="transform:translate(-{pos}vw)">
		{#each contentData as { img, id, text }}
			<div class="slide" style="background-image:url('{img}')">
				<article class="slide-content">
					<h1>{id}</h1>
					<p>{text}</p>
				</article>
			</div>
		{/each}
	</div>

	<button class="next" on:click={nextSlide}>+</button>
	{#if pos != 0}
		<button class="prev" on:click={prevSlide}>-</button>
	{/if}
</div>
