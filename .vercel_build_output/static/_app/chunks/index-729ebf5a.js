import { n, s as t } from './index-83f33906.js';
const e = [];
function s(s, o = n) {
	let c;
	const l = [];
	function f(n) {
		if (t(s, n) && ((s = n), c)) {
			const n = !e.length;
			for (let t = 0; t < l.length; t += 1) {
				const n = l[t];
				n[1](), e.push(n, s);
			}
			if (n) {
				for (let n = 0; n < e.length; n += 2) e[n][0](e[n + 1]);
				e.length = 0;
			}
		}
	}
	return {
		set: f,
		update: function (n) {
			f(n(s));
		},
		subscribe: function (t, e = n) {
			const i = [t, e];
			return (
				l.push(i),
				1 === l.length && (c = o(f) || n),
				t(s),
				() => {
					const n = l.indexOf(i);
					-1 !== n && l.splice(n, 1), 0 === l.length && (c(), (c = null));
				}
			);
		}
	};
}
export { s as w };
