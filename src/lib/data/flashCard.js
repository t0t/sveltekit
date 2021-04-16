export const flashCard = [
	{
		word: 'Velociraptor',
		image: '/icons/code-css.svg',
		code: `
1 @for $i from 1 through 5 {
	.cg_#{$i} {
		column-gap: sizes($i);
	}
}
`
	},
	{
		word: 'Raptor Delta',
		image: '/icons/touch-id.svg',
		code: `
// 1
// .cg_2 {
//     column-gap: 2.618rem;
// }
@for $i from 1 through 5 {
	.cg_#{$i} {
		column-gap: sizes($i);
	}
}
`
	},
	{
		word: 'vesica piscis',
		image: '/icons/barcode-qr.svg',
		code: `
// 2
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
		word: 'vesica piscis',
		image: '/icons/cryptography.svg',
		code: `
// 3
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
		word: 'vesica piscis',
		image: '/icons/code-html2.svg',
		code: `
// 3
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
	}
];
